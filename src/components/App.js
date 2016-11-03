var React = require('react');
var InputContainer = require('../containers/InputContainer');

//rendering the different components of our app here
var App = React.createClass({
  render: function() {
    return (
      <div className='App'>
        <InputContainer />
      </div>
    );
  }
});

module.exports = App;
