import React from 'react';
import puppeteer from 'puppeteer';

let browser;
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
            await page.waitForSelector(".Legend");
            await page.waitFor(2000);
            // todo: Provide dummy graph to React by mocking requests
            const legendNodes = await page.$eval(".graph-element-type-container > div > div", (el) => el.children.length);
            expect(legendNodes).toBeGreaterThan(0);            
        },
        30000
    );
});