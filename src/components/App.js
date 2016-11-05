var React = require('react');
var InputContainer = require('../containers/InputContainer');
var CounterContainer = require('../containers/CounterContainer');

//rendering the different components of our app here
var App = React.createClass({
  render: function() {
    return (
      <div className='App'>
        <InputContainer />
        <CounterContainer />
      </div>
    );
  }
});

module.exports = App;
