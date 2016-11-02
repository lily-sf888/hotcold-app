//every time our app wants to change the state of the app it should dispatch
//an action, the actions are then handled by the reducer

//events when user clicks the guess button:
//user input value, update user guess count, show list of guessed numbers
//call function for user feedback
var ON_SUBMIT = 'ON_SUBMIT';
var onSubmit = function(userGuess) {
  return {
    type: 'ON_SUBMIT',
    userGuess: userGuess
  }
};

//new game action: calculate random number, reset counter and list of guessed
//numbers

//feedback action: display message how close user is with their guessed


//gatherFeedback action: calculate difference between user guess and actual
//random number and use switch case statement to display feedback


exports.ON_SUBMIT = ON_SUBMIT;
exports.onSubmit = onSubmit;
