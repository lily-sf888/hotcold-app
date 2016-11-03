//reducers respond to the actions and modify the state
var actions = require('../actions/index');

//setting initial state for the reducers
var initialState = {
  userGuess: '',
  allGuesses: [],
  feedback: '',
  randomNum: Math.floor(Math.random() * 100),
  guessAttempts: 0,
  difference: 0

};
console.log(initialState);

var reducers = function(state = initialState, action) {

  switch(action.type) {

    case actions.ON_SUBMIT:
      var userGuess = action.userGuess;
      userGuess = parseInt(userGuess);
      var randomNum = state.randomNum;
      var feedback = state.feedback;
      var difference = state.difference;
      difference = Math.abs(randomNum - userGuess);
      console.log(difference)
      // switch statement to say how close to guess
      var getFeedback = function(feedback, difference) {

        switch(difference){

              case difference > 50:
                feedback = 'ice cold';
                 break;
              case difference > 30 && difference < 50:
                feedback = 'cold';
                break;
              case difference > 20 && difference < 30:
                feedback = 'warm';
                break;
              case difference > 10 && difference < 20:
                feedback = 'hot';
                break;
              case difference > 1 && difference < 10:
                feedback = 'very hot';
                break;
              case difference === 0:
                feedback = 'Congrats, you guessed the right number';
             }
             return feedback;
      }
      getFeedback();
      console.log(feedback);
      var newState = Object.assign({}, state, {
        userGuess: userGuess,
        allGuesses: state.allGuesses.concat(userGuess),
        guessAttempts: state.allGuesses.length + 1,
        feedback: state.feedback

      });

      console.log(newState)
      return newState




  }
  return state;
};

exports.reducers = reducers;
