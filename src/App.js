import React, { Component } from 'react';
import './App.css';
import InputContainer from './containers/InputContainer';
import CounterContainer from './containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputContainer />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
