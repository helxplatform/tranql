import App from './App.js';

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