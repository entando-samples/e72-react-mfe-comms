import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mediatorInstance } from '@entando/mfecommunication';

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
    mediatorInstance.publish(eventId, detail);
  }

  render() {
    ReactDOM.render(<App onGreet={this.onGreet} />, this.mountPoint);
  }
}

customElements.define('publisher-mfe', WidgetElement);

export default WidgetElement;
