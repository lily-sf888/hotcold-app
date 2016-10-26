import { connect } from 'react-redux'
import RandomView from '../components/RandomView'
import { randomNumber } from '../actions'
//describing how different parts of the state should be stored inside props
const mapStateToProps = (state) => {
  return {
    randomnumber: state.randomnumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    randomNumber: () => {
      dispatch(randomNumber())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomView)
