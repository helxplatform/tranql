/**
 * Utility functions to be reused specifically within Jest unit tests.
 */

import App from './App.js';

/**
 * Resolves once a response for an API request completes on a page.
 * 
 * @param {Puppeteer.Page} page 
 * @param {String} apiPath - Relative API path, e.g. "/tranql/query"
 * @returns 
 */
export function pageFinishesRequest(page, apiPath) {
    return new Promise((resolve) => {
        page.on("response", (resp) => {
            const url = new URL(resp.url());
            if (url.origin + url.pathname === App.prototype.tranqlURL + apiPath) {
                resolve();
            }
        });
    });
}