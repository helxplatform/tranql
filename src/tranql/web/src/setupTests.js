jest.mock("../node_modules/elasticlunr/elasticlunr.js", () => {});

// Test the website served through Node.js
export const WEBSITE_URL = "http://localhost:3000";

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

/* Setup using environment variables */
// If BROWSER_MODE is set, use that, else use default (DEBUG).
const BROWSER_MODE = process.env.BROWSER_MODE ? BrowserMode[process.env.BROWSER_MODE] : BrowserMode.DEBUG
// If MOCKING is set ("true" or "false"), convert it from string to bool, else use default (true).
const MOCKING = process.env.MOCKING ? (process.env.MOCKING === "true") : true;
// If SANDBOX is set ("true" or "false"), convert it from string to bool, else use default (true).
// Be aware that this option should be left true unless it's necessary for it to be disabled.
// When disabled, it will disable Chromium sandboxing which exposes security vulnerabilities.
const SANDBOX = process.env.SANDBOX ? (process.env.SANDBOX === "true") : true;

// Initialize testing arguments for tesss
global.args = {
    // Should tests intercept API calls with mock requests (i.e. schema/graph queries)
    mocking: MOCKING,
    // Configures whether the Chromium instance will run headless or not
    browserMode: BROWSER_MODE,
    sandbox: SANDBOX
};

jest.setTimeout(60000);