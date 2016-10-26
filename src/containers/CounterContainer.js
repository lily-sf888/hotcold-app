import { connect } from 'react-redux'
import CounterView from '../components/CounterView'
import { guessCounter } from '../actions'
//describing how different parts of the state should be stored inside props
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    guessCounter: () => {
      dispatch(guessCounter())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
