import React from 'react';
import './App.css';

function App({ name }) {
  return name ? (<h2>Just got a greeting from {name}</h2>)
    : (<h2>Waiting for a greeting...</h2>);
}

export default App;
