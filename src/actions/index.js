//every time our app wants to change the state of the app it should dispatch
//an action, the actions are then handled by the reducer
//using fetch method to make the ajax requests

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
  var randomNum = Math.floor((Math.random() * 100) + 1)

  return {
    type: 'NEW_GAME',
    randomNum: randomNum,
    guessAttempts: guessAttempts,
    feedback: feedback,
    allGuesses: allGuesses
  }
};

var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
var fetchFewestGuesses = function(fewestGuesses) {
  var randomNum = Math.floor((Math.random() * 100) + 1)

  return {
    type: 'FETCH_FEWEST_GUESSES',
    fewestGuesses: fewestGuesses,
    randomNum: randomNum
  }
};

var FETCH_ERROR= 'FETCH_ERROR';
var fetchError = function(error) {
    return {
        type: FETCH_ERROR,
        error: error
    };
};

//this fetch method sends a request to our GET endpoint and brings back
//fewestGuesses data
var FETCH_GUESSES= 'FETCH_GUESSES';
var fetchGuesses = function() {

  return function(dispatch) {

    var url = new URL('https://localhost:8080/fewest-guesses')
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
    return dispatch(
      fetchFewestGuesses(data.fewestGuesses)
    );
  })
  .catch(function(error) {
    return dispatch(
      fetchError(error)
    );
  });
 }
};

//this sends a request to our POST endpoint and updates the current state of fewestGuesses
var SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
var saveFewestGuesses = function(guessAttempts) {

  return function(dispatch) {

    return fetch('https://localhost:8080/fewest-guesses',
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({fewestGuesses: guessAttempts})
    })
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
      return dispatch(
      fetchFewestGuesses(data.fewestGuesses)
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
exports.FETCH_GUESSES = FETCH_GUESSES;
exports.fetchGuesses = fetchGuesses;
exports.SAVE_FEWEST_GUESSES = SAVE_FEWEST_GUESSES;
exports.saveFewestGuesses = saveFewestGuesses;
