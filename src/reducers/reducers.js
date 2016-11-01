//import {onSubmit} from '../actions/index'

//setting initial state for the reducers
const initialState = {
  userGuess: ''

}

const reducers = (state = initialState, action) => {

  switch (action.type) {

    case 'ON_SUBMIT':
      // we want to update the state with new user guess
      let userGuess = action.userGuess
      console.log(userGuess)
      return Object.assign({}, state, {
        userGuess: userGuess
      })


    /*
    case 'RANDOM_NUMBER':
      return Object.assign({}, state, {randomnumber:
      Math.floor(Math.random() * 100) + 1})
      */


      default:
      return state

  }
}

export default reducers
