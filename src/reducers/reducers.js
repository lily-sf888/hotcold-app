//setting initial state for the reducers
const initialState = {
  count: 0,
  randomnumber: 0
}

const reducers = (state = initialState, action) => {

  switch (action.type) {

    case 'GUESS_COUNTER':
      return Object.assign({}, state, { count: state.count + 1 })

    case 'RANDOM_NUMBER':
      return Object.assign({}, state, {randomnumber:
      Math.floor(Math.random() * 100) + 1})

    default:
      return state
  }
}

export default reducers
