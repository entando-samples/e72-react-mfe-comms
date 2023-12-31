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
    this.name = null;

    this.subscribeToWidgetEvent(EVENTS.greeting, (evt) => {
        this.onGreeting(evt.name)
    });
  }

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.appendChild(this.mountPoint);
    this.render();
  }

  subscribeToWidgetEvent(eventType, eventHandler) {
    mediatorInstance.subscribe(eventType, {
        callerId: "subscriber-mfe",
        callback: eventHandler
    });
  }

  onGreeting(name) {
    this.name = name;
    this.render();
  }

  render() {
    ReactDOM.render(<App name={this.name} />, this.mountPoint);
  }
}

customElements.define('subscriber-mfe', WidgetElement);

export default WidgetElement;
