jest.mock("../node_modules/elasticlunr/elasticlunr.js", () => {});

// The amount of time (in ms) that tests will periodically sleep for when browser mode is set to DEBUG.
export const SLEEP_INTERVAL = 1000;
export const BrowserMode = Object.freeze({
    // Fastest, runs tests on a headless Chromium instance.
    HEADLESS: 0,
    // Runs on a headful (UI-enabled) Chromium instance. This can be enabled in order to see what's happening during the tests.
    HEADFUL_FAST: 1,
    // Same as HEADFUL_FAST, but has built in sleep intervals to better assess what's happening during the tests.
    DEBUG: 2,
    // Alias of DEBUG
    HEADFUL_SLOW: 2
});

// Initialize testing arguments for tesss
global.args = {
    // Should tests intercept API calls with mock requests (i.e. schema/graph queries)
    mocking: true,
    // Configures whether the Chromium instance will run headless or not
    browserMode: BrowserMode.DEBUG
};

jest.setTimeout(60000);