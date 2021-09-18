import React from 'react';
import puppeteer from 'puppeteer';
import ReactTestUtils from 'react-dom/test-utils';
import App from '../App';

let MOCK_SCHEMA;
if (args.mocking) {
    MOCK_SCHEMA = require("./static/mock_schema.json"); 
}

let browser, page;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: args.headless,
        // Intercepting requests causing CORS issues so this needs to be disabled.
        args: [
            "--disable-web-security"
        ]
    });
    page = await browser.newPage();
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
            const schemaPage = await browser.newPage();
            await schemaPage.setRequestInterception(true);
            console.log
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
        30000
    );
});

afterAll(() => {
    browser.close();
});