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
  fewestGuesses: 0,
  guessedCorrectly: false
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
      console.log(randomNum);
      //get feedback to users how close their guess is
      var getFeedback = function(feedback, difference, userGuess, guessAttempts, guessedCorrectly) {
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

				feedback = "Congrats, you guessed the right number!";

          var guessAttempts = state.allGuesses.length + 1;
          var guessedCorrectly = true;
			}
        // instead of returning an array return an object
        return [feedback, difference, userGuess, guessAttempts, guessedCorrectly];
         //return {feedback, difference, userGuess, guessAttempts, guessedCorrectly}

      }

       var newState = getFeedback(feedback, difference, userGuess, guessAttempts, guessedCorrectly);
      //var data = getFeedback(feedback, difference, userGuess, guessAttempts, guessedCorrectly);
      // var feedback = data[0];
      // var difference = data[1];
      // var userGuess = data[2];
      var guessAttempts = 3;
      var guessedCorrectly = false;

       console.log('data:', feedback, difference, userGuess, guessAttempts, guessedCorrectly)
      // return Object.assign({}, state, {
      //   userGuess: userGuess,
      //   allGuesses: state.allGuesses.concat(userGuess),
      //   guessAttempts: guessAttempts,
      //   feedback: feedback,
      //   guessedCorrectly: guessedCorrectly
      // });
      return Object.assign({}, state, newState);

        break;

     case actions.NEW_GAME:

        return Object.assign({}, state, {
          randomNum: Math.floor(Math.random() * 100),
          allGuesses: [],
          guessAttempts: 0,
          feedback: 'Make your guess!'
          // fewestGuesses: state.fewestGuesses
        });

        break;

      case actions.FETCH_FEWEST_GUESSES:

        return Object.assign({}, state, {
          fewestGuesses: action.fewestGuesses
        });

      case actions.FETCH_ERROR:

        console.log('error from reducer');

        break;

      default:

        return state;

    }
    return state;
};


exports.reducers = reducers;
