/**
 * Utility functions to be reused specifically within Jest unit tests.
 */

import { Puppeteer } from 'puppeteer';
import App from './App.js';

/**
 * Resolves once a response for an API request completes on a page.
 * 
 * @param {Puppeteer.Page} page 
 * @param {String} apiPath - Relative API path, e.g. "/tranql/query"
 * @returns {Promise<Puppeteer.HTTPResponse>} The response
 */
export function pageFinishesRequest(page, apiPath) {
    return new Promise((resolve) => {
        page.on("response", (resp) => {
            const url = new URL(resp.url());
            if (url.origin + url.pathname === App.prototype.tranqlURL + apiPath) {
                resolve(resp);
            }
        });
    });
}

/**
 * Intercepts an endpoint and sends a mock response.
 * This function will take args.mocking into account automatically,
 * letting the request proceed normally when mocking is disabled.
 * 
 * @param {Puppeteer.Page} page 
 * @param {String} endpoint - Relative API path, e.g. "/tranql/query"
 *  
 */

export class Mocker {
    constructor() {
        this.mocks = [
                {
                    name: "query_disease_phenotypic_feature_diabetes",
                    endpoint: "/tranql/query",
                    request: {
                        body: `select disease->phenotypic_feature
 from "redis:test"
where disease="diabetes"`,
                    },
                    response: {
                        contentType: "application/json",
                        body: JSON.stringify(require("./__tests__/mock/mock_graph.js"))
                    }
                },
                {
                    name: "schema",
                    endpoint: "/tranql/schema",
                    response: {
                        contentType: "application/json",
                        body: JSON.stringify(require("./__tests__/mock/mock_schema.json"))
                    }
                },
                {
                    name: "parse_incomplete_single_select",
                    endpoint: "/tranql/parse_incomplete",
                    request: {
                        body: `["select ","select "]`
                    },
                    response: {
                        contentType: "application/json",
                        body: JSON.stringify(require("./__tests__/mock/mock_parse_incomplete_single_select.js"))
                    }
                },
                {
                    name: "parse_incomplete_forward_select_complete",
                    endpoint: "/tranql/parse_incomplete",
                    request: {
                        body: `["select disease->","select disease->\\n from \\"redis:test\\"\\nwhere disease=\\"asthma\\""]`
                    },
                    response: {
                        contentType: "application/json",
                        body: JSON.stringify(require("./__tests__/mock/mock_parse_incomplete_forward_select_complete.json"))
                    }
                }
        ];
    }
    /**
     * Setup mocking on a Puppeteer page.
     * 
     * @param {Puppeteer.Page} page
     * @param {String|String[]|undefined} specificMocks - Only mocks whose `name` key is included in this array will be mocked. By default, it will mock everything.
     */
    async mock(page, specificMocks=undefined) {
        if (typeof specificMocks === "undefined") specificMocks = this.mocks.map((m) => m.name).filter((name) => name !== undefined);
        if (typeof specificMocks === "string") specificMocks = [specificMocks];
        specificMocks.forEach((mockName) => {
            if (!this.mocks.map((m) => m.name).includes(mockName)) throw new Error(`Mock "${mockName}" does not exist.`);
        });
        await page.setRequestInterception(true);
        page.on("request", (req) => {
            const responded = false;
            this.mocks.forEach((mock) => {
                if (args.mocking && specificMocks.includes(mock.name) && this._matchMock(mock, req)) {
                    req.respond(mock.response);
                    responded = true;
                }
            });
            // Continue the request if no mocks match it.
            if (!responded) req.continue();
        });
    }
    /**
     * Since the Mocker is built to support both real and mocked responses simultaneously, this method should be used
     * to intercept the response of a (possibly) mocked request. 
     * 
     * This method returns the first response for a mocked request.
     * 
     * @param {Puppeteer.Page} page 
     * @param {String} mockName - Corresponds to the `name` key of a mock. 
     * @returns {Promise<Puppeteer.HTTPResponse>}
     */
    resolveResponse(page, mockName) {
        return new Promise((resolve, reject) => {
            page.on("response", (resp) => {
                const mock = this.mocks.find((mock) => mock.name === mockName);
                if (mock === undefined) reject(`Mock with name "${mockName}" does not exist.`);
                if (this._matchMock(mock, resp.request())) {
                    resolve(resp);
                }
            });
        });
    }
    _matchMock(mock, request) {
        const url = new URL(request.url());
        return (
            url.origin + url.pathname === App.prototype.tranqlURL + mock.endpoint &&
            (mock.request === undefined || this._matchRequestData(mock.request, request))
        );
    }
    /**
     * 
     * @param {Object} mockRequest 
     * @param {Puppeteer.HTTPRequest} request 
     */
    _matchRequestData(mockRequest, request) {
        return (
            (mockRequest.body === undefined || mockRequest.body === request.postData())
        );
    }
}