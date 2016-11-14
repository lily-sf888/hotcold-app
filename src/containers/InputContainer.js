var connect = require('react-redux').connect;
var InputView = require('../components/InputView');

var mapStateToProps = function(state) {
  return {
    userGuess: state.userGuess,
    feedback: state.feedback,
    guessedCorrectly: state.guessedCorrectly,
    fewestGuesses: state.fewestGuesses,
    guessAttempts: state.guessAttempts
  }
};

var Container = connect(mapStateToProps)(InputView);
module.exports = Container;
