//every time our app wants to change the state of the app it should dispatch
//an action, the actions are then handled by the reducer
var isomorphicFetch = require('isomorphic-fetch');

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
//action for getting the user with the fewest guesses
var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
var fetchFewestGuesses = function(fewestGuesses) {
  return {
    type: 'FETCH_FEWEST_GUESSES',
    fewestGuesses: fewestGuesses
  }
};

var FETCH_ERROR= 'FETCH_ERROR';
var fetchError = function(error) {
    return {
        type: FETCH_ERROR,
        error: error
    };
};


exports.ON_SUBMIT = ON_SUBMIT;
exports.onSubmit = onSubmit;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.FETCH_ERROR = FETCH_ERROR;
exports.fetchError = fetchError;
