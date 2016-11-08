var actions = require('../actions/index');
var fetchFewestGuesses = require('../actions/index');
var fetchError = require('../actions/index');

//setting initial state for the reducers
var initialState = {
  allGuesses: [],
  randomNum: Math.floor(Math.random() * 100),
  userGuess: 0,
  feedback: 'Make your guess!',
  guessAttempts: 0,
  fewestGuesses: 0
};
//reducers respond to the actions and modify the state
var reducers = function(state = initialState, action) {

  switch(action.type) {
    //events that happen when user clicks the guess button
    case actions.ON_SUBMIT:

      var userGuess = action.userGuess;
      userGuess = parseInt(userGuess);
      var randomNum = state.randomNum;
      var feedback = feedback;
      var difference = difference;
      difference = Math.abs(randomNum - userGuess);

    //get feedback to users how close their guess is
    var getFeedback = function(feedback, difference, userGuess) {
      if((isNaN(userGuess)) || userGuess > 100) {
        alert('Please type in a number between 1 and 100');
      }else if(difference > 50) {
			     feedback = "ice cold";
			}else if(difference > 30 && difference < 50 ) {
			     feedback = "cold";
			}else if(difference > 20 && difference < 30) {
			     feedback = "warm";
			}else if(difference > 10 && difference < 20) {
			     feedback ="hot";
			}else if(difference > 1 && difference < 10) {
			     feedback = "very hot";
			}else if(difference === 0) {
        //  trigger the lowest guess action
				feedback = "Congrats, you guessed the right number!";
			}
      return feedback;
      }
      var feedback = getFeedback(feedback, difference, userGuess);

        return Object.assign({}, state, {
          userGuess: userGuess,
          allGuesses: state.allGuesses.concat(userGuess),
          guessAttempts: state.allGuesses.length + 1,
          feedback: feedback
        });

      break;

     case actions.NEW_GAME:

        return Object.assign({}, state, {
          randomNum: Math.floor(Math.random() * 100),
          allGuesses: [],
          guessAttempts: 0,
          feedback: 'Make your guess!'
        });

      break;
      //not sure what actions to perform
      case actions.FETCH_FEWEST_GUESSES:
        // make trip to server
        var fetchFewestGuesses = function() {
          return function(dispatch) {
          var url = 'https://localhost:3000/fewest-guesses';
          return fetch(url).then(function(response) {
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

        return Object.assign({}, state, {
          fewestGuesses: 99
        });
    }
  return state;
};


exports.reducers = reducers;
