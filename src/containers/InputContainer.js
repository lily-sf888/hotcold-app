import { connect } from 'react-redux'
import InputView from '../components/InputView'
import { onSubmit } from '../actions'

//describing how different parts of the state should be stored inside props
const mapStateToProps = (state, props) => {
  return {
    userGuess: state.userGuess
  }
}
/*
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (userGuess) => {
      dispatch(onSubmit(userGuess))
    }
  }
}
*/
export default connect(mapStateToProps)(InputView)
