import React from 'react';
import puppeteer from 'puppeteer';
import ReactTestUtils from 'react-dom/test-utils';
import App from '../App';
import { node } from 'prop-types';

let MOCK_SCHEMA, MOCK_GRAPH;
if (args.mocking) {
    MOCK_SCHEMA = require("./mock/mock_schema.json");
    // Has a comment regarding the query so is a JS file.
    MOCK_GRAPH = require("./mock/mock_graph.js");
}

let browser, page, schemaPage, graphPage;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: args.headless,
        // Intercepting requests causing CORS issues so this needs to be disabled.
        args: [
            "--disable-web-security"
        ]
    });
    page = await browser.newPage();
    schemaPage = await browser.newPage();
    graphPage = await browser.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });
});

describe('App', async () => {
    test(
        "header renders",
        async () => {
            await page.waitForSelector("#headerContainer");

            const header = await page.$eval("#headerContainer > p", e => e.innerHTML);
            expect(header).toEqual("TranQL");

        },
        30000
    );
    test(
        "args load",
        async () => {
            expect(args.mocking).toEqual(true);
        },
        30000
    );
    test(
        "schema loads",
        async () => {
            // Create a new page for testing if the schema loads.
            // Need to intercept requests to /tranql/schema. Wouldn't want
            // the requests to have already gone through by the time the test is run.
            await schemaPage.setRequestInterception(true);
            schemaPage.on("request", (req) => {
                const url = new URL(req.url());
                if (url.origin + url.pathname === App.prototype.tranqlURL + "/tranql/schema") {
                    req.respond({
                        contentType: "application/json",
                        body: JSON.stringify(MOCK_SCHEMA)
                    });
                } else {
                    req.continue();
                }
            });
            await schemaPage.goto("http://localhost:3000", { waitUntil: "networkidle2" });
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
            await schemaPage.reload({ waitUntil : "networkidle2" });
            await schemaPage.waitForSelector(".Legend");
            // todo: Provide dummy graph to React by mocking requests
            const legendNodes = await schemaPage.$eval(".graph-element-type-container > div > div", (el) => el.children.length);
            expect(legendNodes).toBeGreaterThan(0);            
        },
        600000
    );
    test(
        "graph loads",
        async () => {
            await graphPage.setRequestInterception(true);
            graphPage.on("request", (req) => {
                const url = new URL(req.url());
                if (url.origin + url.pathname === App.prototype.tranqlURL + "/tranql/query") {
                    req.respond({
                        contentType: "application/json",
                        body: JSON.stringify(MOCK_GRAPH)
                    });
                } else {
                    req.continue();
                }
            });
            await graphPage.goto("http://localhost:3000", { waitUntil: "networkidle2" });
            await graphPage.waitForSelector(".query-code > .CodeMirror");
            const cmInstance = await graphPage.evaluate(async () => {
                // Right now, there is no specific mocking structure to /tranql/query, it will just return the same
                // static mock graph for any query made when mocking is enabled.
                const testQuery = `
select disease->phenotypic_feature
 from "redis:test"
where disease="diabetes"
                `;
                const el = document.querySelector(".query-code > .CodeMirror");
                const cmInstance = el.CodeMirror;
                cmInstance.setValue(testQuery);
            });
            const runButton = await graphPage.waitForSelector("#runButton");
            runButton.click();
            // Not sure why, but ReactForceGraph sets window.scene to the scene currently being rendered by it.
            // Or maybe this is happening somewhere deep in the app? It seems weird that ReactForceGraph would do this
            // because it would suggest that you could only render one graph per page.
            // Regardless, just use the scene variable for now because there doesn't seem to be a way to access the internal
            // Three.js scene from just a DOM node, so you would have to set a global variable in the App anyways.
            const elements = await graphPage.evaluate(async () => {
                // FromKapsule is the object that ReactForceGraph stores objects in.
                const kapsule = window.scene.children.find((i) => i.constructor.name === "FromKapsule");
                // kapsule.children contains Mesh objects (each representing either a node or link).
                // Their data is stored in the __data attribute.
                // Their type is stored in the __graphObjType attribute ("node"|"link")
                return kapsule.children.map((element) => element.__data.origin);
            });
            const conditions = {
                "MONDO:0015790": false,
                "MONDO:0030087": false,
                "MONDO:0005147": false,
                "MONDO:0014523-[has_phenotype]->HP:0007366": false
            };
            elements.forEach((el) => {
                if (el.hasOwnProperty("source_id")) {
                    // Edge
                    if (el.source_id === "MONDO:0014523" && el.target_id === "HP:0007366" && el.type === "has_phenotype") {
                        conditions["MONDO:0014523-[has_phenotype]->HP:0007366"] = true;
                    }
                } else {
                    // Node
                    if (el.id === "MONDO:0015790") conditions["MONDO:0015790"] = true;
                    if (el.id === "MONDO:0030087") conditions["MONDO:0030087"] = true;
                    if (el.id === "MONDO:0005147") conditions["MONDO:0005147"] = true;

                }
            });
            expect(Object.values(conditions).every((cond) => cond));
        },
        600000
    )
});

afterAll(() => {
    browser.close();
});