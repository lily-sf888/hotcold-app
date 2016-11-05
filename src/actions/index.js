//every time our app wants to change the state of the app it should dispatch
//an action, the actions are then handled by the reducer
var ON_SUBMIT = 'ON_SUBMIT';
var onSubmit = function(userGuess, guessAttempts, feedback, allGuesses) {
  return {
    type: 'ON_SUBMIT',
    userGuess: userGuess,
    guessAttempts: guessAttempts,
    feedback: feedback,
    allGuesses: allGuesses
  }
};

var NEW_GAME = 'NEW_GAME';
var newGame = function(guessAttempts, feedback, allGuesses) {
  return {
    type: 'NEW_GAME',
    guessAttempts: guessAttempts,
    feedback: feedback,
    allGuesses: allGuesses
  }
};

exports.ON_SUBMIT = ON_SUBMIT;
exports.onSubmit = onSubmit;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
