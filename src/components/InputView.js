var React = require('react');
var actions = require('../actions/index');

//when user clicks on guess button, we capture the input value and dispatch
//onSubmit action
//we check whether guessedCorrectly is true, if it is we compare if it is smaller
//than what is stored for fewestGuesses, this triggers our fetch method
//for storing the current lowest user guess
var Input = React.createClass ({
  updateGuess: function() {

    if(this.props.guessAttempts < this.props.fewestGuesses) {

     //this will trigger the post request , create saveFewestGuesses
     this.props.dispatch(actions.saveFewestGuesses(this.props.guessAttempts))
    }
   },
   onClick: function (event) {
     event.preventDefault();
     var userGuess = this.refs.userGuess.value;
     this.props.dispatch(actions.onSubmit(userGuess));
     this.refs.userGuess.value = '';
   },
  componentDidMount() {
    this.refs.userGuess.focus();
  }

   render: function() {
     return (
       <div>
         <h2 id="feedback">{this.props.feedback}</h2>
         <form name="myForm">
           <input ref='userGuess' type="text"  name="userGuess" id="userGuess" className="text" maxLength="3"  autoComplete="off" placeholder="Enter your Guess" />
           <input type="submit" onClick={this.onClick} id="guessButton" className="button" name="submit" value="Guess"/>
         </form>
         <div>{this.props.guessedCorrectly ? this.updateGuess() : ''}</div>
       </div>
     );
   }
 });

 module.exports = Input;
