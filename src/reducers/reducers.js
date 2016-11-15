var actions = require('../actions/index');

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
      // eslint-disable-next-line
      userGuess = parseInt(userGuess);
      var guessedCorrectly = state.guessedCorrectly;
      var randomNum = state.randomNum;
      var guessAttempts = state.allGuesses.length + 1;
      var allGuesses = state.allGuesses.slice()
      allGuesses.push(userGuess)
      // actually do not need to track this here
      var feedback = state.feedback;
      var difference = Math.abs(randomNum - userGuess);

      //get feedback to users how close their guess is
      var getFeedback = function(feedback, difference, userGuess) {

        if((isNaN(userGuess)) || userGuess > 100) {
          alert('Please type in a number between 1 and 100');
        }

        else if(difference > 50) {
  			     feedback = "ice cold";
  			}

        else if(difference > 30 && difference < 50 ) {
  			     feedback = "cold";
  			}

        else if(difference > 20 && difference < 30) {
  			     feedback = "warm";
  			}

        else if(difference > 10 && difference < 20) {
  			     feedback ="hot";
  			}

        else if(difference > 1 && difference < 10) {
  			     feedback = "very hot";
  			}

        else if(difference === 0) {


				  feedback = "Congrats, you guessed the right number!";
          guessedCorrectly = true;
			  }

        return {
          feedback,
          userGuess,
          allGuesses,
          guessAttempts,
          guessedCorrectly
        };
      }

      var data = getFeedback(feedback, difference, userGuess);

      var finalData = Object.assign({}, state, data);

      console.log("FINALDATA", finalData)

      return finalData

     case actions.NEW_GAME:

        var newGameObj = Object.assign({}, state, {
          randomNum: Math.floor(Math.random() * 100),
          allGuesses: [],
          guessAttempts: 0,
          userGuess: 0,
          feedback: 'Make your guess!',
          guessedCorrectly: false
          // fewestGuesses: state.fewestGuesses
        });

        console.log("NEWGAMEOBJ", newGameObj)

        return newGameObj


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
