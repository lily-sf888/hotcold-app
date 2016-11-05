var connect = require('react-redux').connect;
var CounterView = require('../components/CounterView');

//accessing the current state of allGuesses, and setting it up how it should be
//stored in props
var mapStateToProps = function(state) {
  return {
    allGuesses: state.allGuesses
  }
};
//making allGuesses available through props in CounterView
var Container = connect(mapStateToProps)(CounterView);
module.exports = Container;
