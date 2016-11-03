
var actions = require('../actions/index');

//setting initial state for the reducers
var initialState = {
  allGuesses: [],
  randomNum: Math.floor(Math.random() * 100)
};
console.log(initialState);
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
    var getFeedback = function(feedback, difference) {
      if(difference > 50) {
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
			}
      return feedback;
      }
      var feedback = getFeedback(feedback, difference);

      var newState = Object.assign({}, state, {
        userGuess: userGuess,
        allGuesses: state.allGuesses.concat(userGuess),
        guessAttempts: state.allGuesses.length + 1,
        feedback: feedback,
        difference: difference
      });
      console.log(newState)
      return newState
  }
  return state;
};

exports.reducers = reducers;
