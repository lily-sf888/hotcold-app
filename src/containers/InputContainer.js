var connect = require('react-redux').connect;
var InputView = require('../components/InputView');

//accessing current state of userGuess and feedback, and setting them up how
//they should be stored in props
var mapStateToProps = function(state) {
  return {
    userGuess: state.userGuess,
    feedback: state.feedback
  }
};
//making userGuess and feedback available through props in InputView
var Container = connect(mapStateToProps)(InputView);
module.exports = Container;
