var connect = require('react-redux').connect;
var InputView = require('../components/InputView');

var mapStateToProps = function(state, props) {
  return {
    userGuess: state.userGuess
  }
};

 var Container = connect(mapStateToProps)(InputView);
 module.exports = Container;
