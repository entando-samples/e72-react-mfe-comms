import React from 'react';
import './App.css';
   
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: ''};
  }

  handleNameChange(value) {
    this.setState(prevState => ({
      ...prevState,
      name: value,
    }));
  }

  render() {
    const { name } = this.state;
    const { onGreet } = this.props;
    return (
      <div>
        <h1>Send a greeting</h1>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={e => this.handleNameChange(e.target.value)} value={name} />
        <button onClick={() => onGreet(name)}>Say hello!</button>
      </div>
    );
  }
}

export default App;
