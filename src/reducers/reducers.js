var actions = require('../actions/index');

//setting initial state for the reducers
var initialState = {
  userGuess: ''
};
console.log(initialState);

var reducers = function(state = initialState, action) {
  console.log(action);
  switch(action.type) {

    case actions.ON_SUBMIT:
      var userGuess = action.userGuess
      console.log(userGuess)

      return Object.assign({}, state, {
        userGuess: userGuess
      });
      break;
      default: console.log('error');
  }
  return state;
};

exports.reducers = reducers;

    /*
    case 'RANDOM_NUMBER':
      return Object.assign({}, state, {randomnumber:
      Math.floor(Math.random() * 100) + 1})
      */


//       default:
//       return state
//
//   }
// }
//
// export default reducers
