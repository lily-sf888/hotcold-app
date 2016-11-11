//every time our app wants to change the state of the app it should dispatch
//an action, the actions are then handled by the reducer
var isomorphicFetch = require('isomorphic-fetch');

var ON_SUBMIT = 'ON_SUBMIT';
var onSubmit = function(userGuess, guessAttempts, feedback, allGuesses, guessedCorrectly ) {
  return {
    type: 'ON_SUBMIT',
    userGuess: userGuess,
    guessAttempts: guessAttempts,
    feedback: feedback,
    allGuesses: allGuesses,
    guessedCorrectly: guessedCorrectly
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

var fetchGuesses = function() {
  return function(dispatch) {
  //var url = 'http://localhost:8080/fewest-guesses';
  var url = new URL('http://localhost:8080/fewest-guesses'),
  params = {fewestGuesses: 88}
  Object.keys(params).forEach(function(key) {url.searchParams.append(key, params[key])})
  return fetch(url)

  .then(function(response) {
    if (response.status < 200 || response.status >= 300) {
      var error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response;
  })

  .then(function(response) {

    return response.json();
  })

  .then(function(data) {
    console.log("DATA", data)
    var fewestGuesses = data.fewestGuesses;
    return dispatch(
      fetchFewestGuesses(fewestGuesses)
    );
  })

  .catch(function(error) {
    return dispatch(
      fetchError(error)
    );
  });
 }
};


exports.ON_SUBMIT = ON_SUBMIT;
exports.onSubmit = onSubmit;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.FETCH_ERROR = FETCH_ERROR;
exports.fetchError = fetchError;
exports.fetchGuesses = fetchGuesses;
