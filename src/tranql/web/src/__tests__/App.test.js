import React from 'react';
import puppeteer from 'puppeteer';
import ReactTestUtils from 'react-dom/test-utils';
import App from '../App.js';
import { node } from 'prop-types';
import { BrowserMode, SLEEP_INTERVAL, WEBSITE_URL } from '../setupTests.js';
import { mockEndpoint, Mocker, pageFinishesRequest, Mocker as MockHelper } from '../testUtil.js';
const util = require("util");

const mocker = new MockHelper();

const DEBUGGING = args.browserMode === BrowserMode.DEBUG;

/**
 * Global Puppeteer variables
 */
let browser;
let graphPage;

/**
 * Global test-set variables (i.e., data derived from the website that it used in multiple sequential tests)
 */

// This is set in the "graph loads" test, which intercepts the request to /tranql/query and sets it to the response/mock response.
let loadedForceGraph;
// Loaded in "schema loads" test. Same as loadedForceGraph but for schema.
let loadedSchemaGraph;


beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: args.browserMode === BrowserMode.HEADLESS,
        // Intercepting requests causing CORS issues so this needs to be disabled.
        args: [
            "--disable-web-security"
        ]
    });
});

async function getThreeElements(page) {
    // Wait for window.scene to be set
    await page.waitForFunction(`window.scene !== undefined`);

    // Not sure why, but ReactForceGraph sets window.scene to the scene currently being rendered by it.
    // Or maybe this is happening somewhere deep in the app? It seems weird that ReactForceGraph would do this
    // because it would suggest that you could only render one graph per page.
    // Regardless, just use the scene variable for now because there doesn't seem to be a way to access the internal
    // Three.js scene from just a DOM node, so you would have to set a global variable in the App anyways.
    const elements = await page.evaluate(_getThreeElementsFromWindow);
    return elements;
}
function _getThreeElementsFromWindow() {
    // FromKapsule is the object that ReactForceGraph stores objects in.
    const kapsule = window.scene.children.find((i) => i.constructor.name === "FromKapsule");
    // kapsule.children contains Mesh objects (each representing either a node or link).
    // Their data is stored in the __data attribute.
    // Their type is stored in the __graphObjType attribute ("node"|"link")

    // This is mutable and will reflect changes in Three.js scene.
    return kapsule.children.map((element) => element.__data.origin);
}

describe('App', async () => {
    /**
     * Base-line (control) test to verify that the app loads at all.
     * The header is static and should always render unless something
     * goes seriously wrong.
     */
    test(
        "init browser",
        async () => {
            if (!browser) browser = await puppeteer.launch({
                headless: args.browserMode === BrowserMode.HEADLESS,
                // Intercepting requests causing CORS issues so this needs to be disabled.
                args: [
                    "--disable-web-security"
                ]
            });
        },
        30000
    );
    test(
        "header renders",
        async () => {
            const page = await browser.newPage();
            await page.goto(WEBSITE_URL);
            await page.waitForSelector("#headerContainer");

            const header = await page.$eval("#headerContainer > p", e => e.innerText);
            expect(header).toEqual("TranQL");

        },
        30000
    );
    /**
     * Verify that the app will successfully load and parse the schema.
     */
    test(
        "schema loads",
        async () => {
            // Create a new page for testing if the schema loads.
            // Need to intercept requests to /tranql/schema. Wouldn't want
            // the requests to have already gone through by the time the test is run.
            const schemaPage = await browser.newPage();
            // Set the mocker to mock the schema endpoint.
            await mocker.mock(schemaPage, "schema");
            await schemaPage.goto(WEBSITE_URL);
            const settingsButton = await schemaPage.waitForSelector("#settingsToolbar");
            // The click event is attached to an svg, which doesn't support `click`, and for some reason
            // will not trigger its handler from `dispatchEvent(new Event("click"))` either.
            const btn = await schemaPage.$("#settingsToolbar");
            schemaPage.evaluate((btn) => {
                var e = document.createEvent("HTMLEvents");
                e.initEvent("click", true, false);
                btn.dispatchEvent(e);
            }, btn);
            const cacheButton = await schemaPage.$("#clearCache");
            schemaPage.evaluate((btn) => {
                var e = document.createEvent("HTMLEvents");
                e.initEvent("click", true, false);
                btn.dispatchEvent(e);
            }, cacheButton);
            // Wait for Dexie cache to clear
            await schemaPage.waitForFunction(`
                document.querySelector("#clearCache").innerText === "Clear the cache (0B)"
            `);
            await schemaPage.reload();
            
            const res = await mocker.resolveResponse(schemaPage, "schema");
            loadedSchemaGraph = await res.json();

            // Assert that the schema returns a proper message
            expect(loadedSchemaGraph.schema).not.toEqual(undefined);
            expect(loadedSchemaGraph.schema.knowledge_graph).not.toEqual(undefined);

            await schemaPage.waitForSelector(".Legend");
            // todo: Provide dummy graph to React by mocking requests
            const legendNodes = await schemaPage.$eval(".graph-element-type-container > div > div", (el) => el.children.length);
            if (DEBUGGING) await schemaPage.waitFor(SLEEP_INTERVAL);
            expect(legendNodes).toBeGreaterThan(0);            
        },
        600000
    );
    /**
     * This is a test to ensure that autocompletion suggests load, display properly, and modify the code properly.
     * It isn't rigorous because the actual grammar should be tested in the backend, not here.
     * 
     * Note: since the frontend handles suggesting schema-aware completions, this test should be extended to test all suggestion functionalities
     * such as schema-aware predicate completion, arrow completion, schema completion (i.e. `from` statements), etc.
     *  - This would involve making the main part the test reusable, so that various different `/tranql/parse_incomplete`
     *    responses could be tested.
     *  - Also would involve adding a mock helper most likely.
     */

    test(
        "autocompletion works",
        async () => {
            const page = await browser.newPage();
            await mocker.mock(page, ["reasoner_urls", "parse_incomplete_single_select", "parse_incomplete_forward_select_complete"]);
            await page.goto(WEBSITE_URL);
            
            async function testAutocomplete(query, cursorPos, mockName, expectedResults, resultingQuery) {
                await page.evaluate(async (query, cursorPos) => {
                    const cmInstance = document.querySelector(".query-code > .CodeMirror").CodeMirror;
            
                    cmInstance.setValue(query);
                    cmInstance.setCursor(cursorPos);
                    // Call the autocomplete function attached to "ctrl + space" shortcut.
                    cmInstance.options.extraKeys["Ctrl-Space"]();
                }, query, cursorPos);
                await mocker.resolveResponse(page, mockName);
                await page.waitForFunction(async () => {
                    const cmInstance = document.querySelector(".query-code > .CodeMirror").CodeMirror;
                    return cmInstance.state.completionActive !== undefined && cmInstance.state.completionActive.data.list[0].displayText !== "Loading";
                });
                const completions = await page.evaluate(() => {
                    const cmInstance = document.querySelector(".query-code > .CodeMirror").CodeMirror;
                    return cmInstance.state.completionActive.data.list;
                });
                const completionTexts = completions.map((completion) => completion.displayText);
                expectedResults.forEach((result) => {
                    if (!completionTexts.includes(result)) throw new Error(`${JSON.stringify(completionTexts)}, ${result}`)
                    expect(completionTexts.includes(result)).toEqual(true);
                });
                if (DEBUGGING) await page.waitFor(SLEEP_INTERVAL);
                const cmValue = await page.evaluate(async () => {
                    const cmInstance = document.querySelector(".query-code > .CodeMirror").CodeMirror;
                    cmInstance.state.completionActive.widget.changeActive(0);
                    cmInstance.state.completionActive.widget.pick();
            
                    return cmInstance.getValue();
                });
                expect(cmValue).toEqual(util.format(resultingQuery, completionTexts[0]));
                if (DEBUGGING) await page.waitFor(SLEEP_INTERVAL);
            }
            const tests = [
                [
                    "select ",
                    {line: 0, ch: 7},
                    "parse_incomplete_single_select",
                    // Expect every node in the schema to be suggested
                    loadedSchemaGraph.schema.knowledge_graph.nodes.map((n) => n[0]),
                    "select %s"
                ],
                [
                    `select disease->
 from "redis:test"
where disease="asthma"`,
                    {line: 0, ch: 16},
                    "parse_incomplete_forward_select_complete",
                    // Expect the target node of every edge with source "disease", i.e. every node with an edge with source "disease".
                    // Leave out self-referencing nodes (disease->disease) which aren't currently supported in the force graph and are removed.
                    loadedSchemaGraph.schema.knowledge_graph.edges.filter((e) => e[0] === "disease" && e[1] !== "disease").map((e) => e[1]),
                    `select disease->%s
 from "redis:test"
where disease="asthma"`,
                ],
                /*[
                    `select disease-[]->phenotypic_feature`,
                    {line: 0, ch: 16},
                    "parse_incomplete_predicate_completion",
                    // Expect the predicates of all edges with source disease and target phenotypic_feature.
                    loadedSchemaGraph.schema.knowledge.graph.edges.filter((e) => e[0] === "disease" && e[1] === "phenotypic_feature").map((e) => e[2]),
                    "select disease-[%s]->phenotypic_feature"
                ]*/
            ];
            for (let i=0; i<tests.length; i++) await testAutocomplete(...tests[i]);
        },
        30000
    )
    /**
     * Verify that the app will properly execute a query, parse its response, and render the force graph.
     */
    test(
        "graph loads",
        async () => {
            graphPage = await browser.newPage();
            await mocker.mock(graphPage, "query_disease_phenotypic_feature_diabetes");
            await graphPage.goto(WEBSITE_URL);
            await graphPage.waitForSelector(".query-code > .CodeMirror");
            await graphPage.evaluate(async () => {
                // Right now, there is no specific mocking structure to /tranql/query, it will just return the same
                // static mock graph for any query made when mocking is enabled.
                const testQuery = `select disease->phenotypic_feature
 from "redis:test"
where disease="diabetes"`;
                const el = document.querySelector(".query-code > .CodeMirror");
                const cmInstance = el.CodeMirror;
                cmInstance.setValue(testQuery);
            });
            const runButton = await graphPage.waitForSelector("#runButton");
            runButton.click();

            const res = await mocker.resolveResponse(graphPage, "query_disease_phenotypic_feature_diabetes")
            loadedForceGraph = await res.json();

            // Assert that the query returns a proper message
            expect(loadedForceGraph.message).not.toEqual(undefined);
            expect(loadedForceGraph.message.knowledge_graph).not.toEqual(undefined);

            const elements = await getThreeElements(graphPage);

            const renderedNodes = [];
            const renderedEdges = [];
            elements.forEach((el) => {
                if (el.hasOwnProperty("source_id")) renderedEdges.push(el);
                else renderedNodes.push(el.id);
            });
            Object.keys(loadedForceGraph.message.knowledge_graph.nodes).forEach((nId) => {
                expect(renderedNodes.includes(nId)).toEqual(true);
            });
            Object.values(loadedForceGraph.message.knowledge_graph.edges).forEach((edge) => {
                const graphHasEdge = renderedEdges.some((rEdge) => {
                    return (
                        rEdge.subject === edge.subject &&
                        rEdge.object === edge.object &&
                        rEdge.predicate === edge.predicate
                    );
                });
                expect(graphHasEdge).toEqual(true);
            });
            if (DEBUGGING) await graphPage.waitFor(SLEEP_INTERVAL);
        },
        600000
    );
    /* ##################
     * # Graph subtests #
     * ##################
     */

    /**
     * Verify that the legend properly hides and unhides graph types
     */
    test(
        "legend works",
        async () => {
            const [nodeLabel, linkLabel] = await graphPage.$$(".Legend .graph-element-content label:last-child");
            const nodeType = await nodeLabel.$eval("b", (e) => e.innerText);
            const linkType = await linkLabel.$eval("b", (e) => e.innerText);

            const originalLength = (await getThreeElements(graphPage)).length;

            // Hide these labels
            await nodeLabel.click();
            await linkLabel.click();


            (await getThreeElements(graphPage)).forEach((element) => {
                if (element.hasOwnProperty("source_id")) {
                    // Assert that no link in the new graph has the hidden type
                    expect(element.predicate).not.toEqual(linkType);
                } else {
                    // Assert that no node in the new graph has the hidden type
                    expect(element.type.includes(nodeType)).toEqual(false);
                }
            });

            if (DEBUGGING) await graphPage.waitFor(SLEEP_INTERVAL);

            // Show the labels again
            await nodeLabel.click();
            await linkLabel.click();

            // Assert that the graph has the same amount of nodes/links as before
            expect((await getThreeElements(graphPage)).length).toEqual(originalLength);

            if (DEBUGGING) await graphPage.waitFor(SLEEP_INTERVAL);

        },
        10000
    );
});

afterAll(() => {
    browser.close();
});