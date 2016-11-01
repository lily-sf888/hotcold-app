import { connect } from 'react-redux'
import InputView from '../components/InputView'

//describing how different parts of the state should be stored inside props
const mapStateToProps = (state, props) => {
  return {
    userGuess: state.userGuess
  }
}

export default connect(mapStateToProps)(InputView)
