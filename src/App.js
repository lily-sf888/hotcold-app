import React, { Component } from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import RandomContainer from './containers/RandomContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <CounterContainer />
      <RandomContainer />

      </div>
    );
  }
}

export default App;
