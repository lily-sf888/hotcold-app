var connect = require('react-redux').connect;
var NewGameView = require('../components/NewGameView');

var mapStateToProps = function(state) {
  return {
    fewestGuesses: state.fewestGuesses,
    guessAttempts: state.guessAttempts

  }
};

var Container = connect(mapStateToProps)(NewGameView);
module.exports = Container;
