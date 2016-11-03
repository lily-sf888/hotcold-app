//stateful component rendering the input component
var React = require('react');
var actions = require('../actions/index');


var Input = React.createClass ({
   onClick: function (event) {
     event.preventDefault();
     var userGuess = this.refs.userGuess.value;
     this.props.dispatch(actions.onSubmit(userGuess));
   },
   render: function() {
     return (
       <div>
         <h2 id="feedback">Make your guess!</h2>
         <form name="myForm">
           <input ref='userGuess' type="text"  name="userGuess" id="userGuess" className="text" maxLength="3"  autoComplete="off" placeholder="Enter your Guess" />
           <input type="submit" onClick={this.onClick} id="guessButton" className="button" name="submit" value="Guess"/>
         </form>
         <p>Guess #<span id="count">0</span>!</p>
         <ul id="guessList" className="guessBox clearfix"></ul>
		  </div>
     );
   }
 });

 module.exports = Input;
