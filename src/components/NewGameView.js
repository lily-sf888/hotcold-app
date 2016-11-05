var React = require('react');
var actions = require('../actions/index');

var NewGame = React.createClass({
  render: function() {
    
    return (
      <div>
        <p>Guess #<span id="count">{this.props.allGuesses.length}</span>!</p>
        <ul id="guessList" className="guessBox clearfix">
          {guesses}
        </ul>
      </div>
    )
  }
});

module.exports = NewGame;
