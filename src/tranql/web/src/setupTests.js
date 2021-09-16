import '@testing-library/jest-dom';
import 'fake-indexeddb/auto';

/* Canvas/WebGL mocking libraries */
import 'jest-canvas-mock';
import 'jest-webgl-canvas-mock';

import { XMLSerializer as serializer } from 'xmldom';

import React, { Component } from 'react';

// Polyfill for XMLSerializer, which it seems jsdom doesn't support.
window.XMLSerializer = serializer;

// Mock object URLs since jsdom does not implement them.
window.URL.createObjectURL = jest.fn();
window.URL.revokeObjectURL = jest.fn();

// elasticlunr defines the variable `lunr` without any variable declaration (`var`, `let`, `const`)
// which causes Jest to throw a reference error since it hasn't been declared. There's probably
// a way to ignore it, but not sure how. 
jest.mock("../node_modules/elasticlunr/elasticlunr.js", () => {});
// jsdom doesn't support a WebGL context and no mock libraries appear to be
// consistently compatible with Three.js (e.g. jest-webgl-canvas-mock doesn't properly
// mock parameters for `WebGLRenderingContext.getParameter()`).
class MockGraph extends Component {
    render() { return <></>; }
}
jest.mock("../node_modules/react-force-graph", () => ({
    ForceGraph: MockGraph,
    ForceGraph2D: MockGraph,
    ForceGraph3D: MockGraph,
    ForceGraphVR: MockGraph,
    ForceGraphAR: MockGraph
}));
// jest.mock("../node_modules/react-codemirror2/index.js", () => {});

// This is unique to IE, which codemirror supports, but jsdom doesn't.
// Mock it so that Jest doesn't complain.
global.document.createRange = () => {
    return {
        setEnd: () => {},
        setStart: () => {},
        getBoundingClientRect: () => {},
        getClientRects: () => []
    };
};