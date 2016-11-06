var React = require('react');
var InputContainer = require('../containers/InputContainer');
var CounterContainer = require('../containers/CounterContainer');
var NewGameContainer = require('../containers/NewGameContainer');
//rendering the different components of our app here
var App = React.createClass({
  render: function() {
    return (
      <div className='App'>
        <NewGameContainer />
        <InputContainer />
        <CounterContainer />
      </div>
    );
  }
});

module.exports = App;
