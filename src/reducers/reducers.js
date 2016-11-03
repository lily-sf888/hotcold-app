//reducers respond to the actions and modify the state
var actions = require('../actions/index');

//setting initial state for the reducers
var initialState = {
  userGuess: '',
  allGuesses: [],
  feedback: 'hi',
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

      // switch statement to say how close to guess
       var getFeedback = function(feedback,difference) {
         feedback = "bye";

         //console.log(feedback);
         console.log(difference);
           switch(difference){

                 case difference > 50:
                   return feedback = 'ice cold';
                    break;
                 case difference > 30 && difference < 50:
                   return feedback = 'cold';
                   break;
                 case difference > 20 && difference < 30:
                   return feedback = 'warm';
                   break;
                 case difference > 10 && difference < 20:
                   return feedback = 'hot';
                   break;
                 case difference > 1 && difference < 10:
                    return feedback = 'very hot';
                   break;
                 case difference === 0:
                   return feedback = 'Congrats, you guessed the right number';
                }
             return feedback;
                //console.log(feedback);

      }
       var feedback = getFeedback(feedback,difference);
       //console.log(feedback);

      var newState = Object.assign({}, state, {
        userGuess: userGuess,
        allGuesses: state.allGuesses.concat(userGuess),
        guessAttempts: state.allGuesses.length + 1,
        feedback: state.feedback,
        difference: state.difference
      });
      //console.log(feedback)
      //console.log(difference)
      console.log(newState)
      return newState




  }
  return state;
};

exports.reducers = reducers;
