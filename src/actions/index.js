var ON_SUBMIT = 'ON_SUBMIT';
var onSubmit = function(userGuess) {
  return {
    type: 'ON_SUBMIT',
    userGuess: userGuess
  }
};


exports.ON_SUBMIT = ON_SUBMIT;
exports.onSubmit = onSubmit;
