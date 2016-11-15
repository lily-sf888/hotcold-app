var React = require('react');

//rendering how many guesses the user has made so far
var Counter = React.createClass({
  render: function() {
    //accessing array allGuesses through props, using map to render li elements
    var guesses = this.props.allGuesses.map(function(num) {
      if (isNaN(num)) {
        return ''
      }

      else {
        return <li key={num.toString()}>{num}</li>
      }
    })

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

module.exports = Counter;
