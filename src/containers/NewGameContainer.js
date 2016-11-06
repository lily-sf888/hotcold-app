var connect = require('react-redux').connect;
var NewGameView = require('../components/NewGameView');

//accessing the current state of , and setting it up how it should be
//stored in props
var mapStateToProps = function(state) {
  return {
    guessAttempts: state.guessAttempts,
    feedback: state.feedback,
    allGuesses: state.allGuesses
  }
};
//making properties available through props in NewGameView
var Container = connect(mapStateToProps)(NewGameView);
module.exports = Container;
