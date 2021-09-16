import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, getByAttribute } from '@testing-library/react';
import App from '../App.js';
import { ForceGraph3D } from 'react-force-graph';

describe('App', () => {
    it('renders banner', () => {
        render(<App />);
        expect(screen.getByText("TranQL")).toBeInTheDocument();
        expect(screen.getByText("Run")).toBeInTheDocument();
    });
});