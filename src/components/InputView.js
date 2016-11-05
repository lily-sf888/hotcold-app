//stateful component rendering the input component
var React = require('react');
var actions = require('../actions/index');

//when user clicks on guess button, we capture the input value and dispatch
//the userGuess value to the store, feedback is accessed through props
var Input = React.createClass ({
   onClick: function (event) {
     event.preventDefault();
     var userGuess = this.refs.userGuess.value;
     this.props.dispatch(actions.onSubmit(userGuess));
     this.refs.userGuess.value = '';
   },
   render: function() {
     return (
       <div>
         <h2 id="feedback">{this.props.feedback}</h2>
         <form name="myForm">
           <input ref='userGuess' type="text"  name="userGuess" id="userGuess" className="text" maxLength="3"  autoComplete="off" placeholder="Enter your Guess" />
           <input type="submit" onClick={this.onClick} id="guessButton" className="button" name="submit" value="Guess"/>
         </form>
       </div>
     );
   }
 });

 module.exports = Input;
