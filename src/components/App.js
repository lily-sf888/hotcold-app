var React = require('react');
var InputContainer = require('../containers/InputContainer');


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
