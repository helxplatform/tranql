jest.mock("../node_modules/elasticlunr/elasticlunr.js", () => {});

// Initialize testing arguments for tesss
global.args = {
    // Should tests intercept API calls with mock requests (i.e. schema/graph queries)
    mocking: true,
    // Configures whether the Chromium instance will run headless or not
    headless: false
};