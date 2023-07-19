import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const EVENTS = {
  greeting: 'greeting',
};

class WidgetElement extends HTMLElement {

  constructor() {
    super();
    this.onGreet = name => this.publishWidgetEvent(EVENTS.greeting, { name });
  }

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.appendChild(this.mountPoint);
    this.render();
  }

  publishWidgetEvent(eventId, detail) {
    const widgetEvent = new CustomEvent(eventId, { detail });
    window.dispatchEvent(widgetEvent);
  }

  render() {
    ReactDOM.render(<App onGreet={this.onGreet} />, this.mountPoint);
  }
}

customElements.define('publisher-mfe', WidgetElement);

export default WidgetElement;
