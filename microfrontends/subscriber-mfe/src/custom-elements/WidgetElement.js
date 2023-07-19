import './public-path.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

class WidgetElement extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('div');
        this.appendChild(this.mountPoint);
        const root = ReactDOM.createRoot(this.mountPoint);
        root.render(<App />);
   }
}

customElements.define('subscriber-mfe', WidgetElement);
