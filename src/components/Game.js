var React = require('react');
var NewGameContainer = require('../containers/NewGameContainer');
//rendering the new game component
var Game = React.createClass({
  render: function() {
    return (
      <div className='NewGame'>
        <NewGameContainer />
      </div>
    );
  }
});

module.exports = Game;
