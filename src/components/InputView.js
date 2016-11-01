import React from 'react'
import {onSubmit} from '../actions/index'


const Input = React.createClass ({
  onSubmit: function (event) {
    event.preventDefault();
    //alert(this.refs.userGuess.value)
    var userGuess = this.refs.userGuess.value;
    this.props.dispatch(onSubmit(userGuess));
  },

  render: function() {
    return (
      <div>
        <form name="myForm">
          <input ref='userGuess' type="text"  name="userGuess" id="userGuess" className="text" maxLength="3"  autoComplete="off" placeholder="Enter your Guess" />
          <input type="submit" onClick={this.onSubmit} id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
      </div>
    );
  }
});
export default Input
