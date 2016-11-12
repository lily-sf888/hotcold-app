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
var newGame = function(guessAttempts, feedback, allGuesses, fewestGuesses) {
  return {
    type: 'NEW_GAME',
    guessAttempts: guessAttempts,
    feedback: feedback,
    allGuesses: allGuesses,
    fewestGuesses: fewestGuesses
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

var FETCH_GUESSES= 'FETCH_GUESSES';
var fetchGuesses = function() {
  return function(dispatch) {
  //var url = 'http://localhost:8080/fewest-guesses';
  var url = new URL('http://localhost:8080/fewest-guesses')

  // how to attach to req.body in fetch?


    // return fetch('https://davidwalsh.name/submit', {
  	//          method: 'post',
  	//          body: {
    //            fewestGuesses: guessAttempts
    //          }
    //        })



  // params = {fewestGuesses: 88}
  // Object.keys(params).forEach(function(key) {url.searchParams.append(key, params[key])})
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
    console.log("DATA", data);
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

var SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
var saveFewestGuesses = function(guessAttempts) {

  return function(dispatch) {
  //var url = 'http://localhost:8080/fewest-guesses';
  //var url = new URL('http://localhost:8080/fewest-guesses')
  // change from get to post??
  // how to attach to req.body in fetch?


    // return fetch('https://davidwalsh.name/submit', {
  	//          method: 'post',
  	//          body: {
    //            fewestGuesses: guessAttempts
    //          }
    //        })



  return fetch('http://localhost:8080/fewest-guesses',
  {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({fewestGuesses: guessAttempts})
})

  .then(function(response) {

    if (response.ok) {

      return response
    }else{
      console.log('not working')
    }

  })

  .then(function(response) {
    return response.json();
  })

  .then(function(data) {
    console.log("DATA WORKS", data);
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
