import React from 'react';
import puppeteer from 'puppeteer';
import App from '../App';

let browser;

// Use global page for general tests where requests/state don't matter
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
});

afterAll(async () => {
    browser.close();
});

describe('App', () => {
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
        "schema loads",
        async () => {
            // Create a new page for testing if the schema loads.
            // Need to intercept requests to /tranql/schema. Wouldn't want
            // the requests to have already gone through by the time the test is run.
            const schemaPage = await browser.newPage();
            schemaPage.setRequestInterception(true);
            schemaPage.on("request", (req) => {
                if (req.url.pathname === App.tranqlURL + "/tranql/schema") {
                    
                }
            });
            await schemaPage.goto("http://localhost:3000");

            await schemaPage.waitForSelector(".Legend");
            await schemaPage.waitFor(2000);
            // todo: Provide dummy graph to React by mocking requests
            const legendNodes = await schemaPage.$eval(".graph-element-type-container > div > div", (el) => el.children.length);
            expect(legendNodes).toBeGreaterThan(0);            
        },
        30000
    );
});