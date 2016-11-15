var connect = require('react-redux').connect;
var NewGameView = require('../components/NewGameView');

var mapStateToProps = function(state) {
  return {
    guessAttempts: state.guessAttempts,
    fewestGuesses: state.fewestGuesses
  }
};

var Container = connect(mapStateToProps)(NewGameView);
module.exports = Container;
