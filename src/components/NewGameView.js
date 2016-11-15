var React = require('react');
var actions = require('../actions/index');


var NewGame = React.createClass({
  componentDidMount: function() {
    this.props.dispatch(actions.fetchGuesses(this.props.fewestGuesses));
  },

  onClick: function(event) {
    event.preventDefault()
    this.props.dispatch(actions.newGame());
  },

  render: function() {
    return (
        <nav>
          <ul className='clearfix'>
            <li id="new-game" ><a onClick={this.onClick} className="new" href=''>+ New Game </a></li>
            <li className='guess' >Fewest Guess: {this.props.fewestGuesses}</li>
          </ul>
        </nav>
     )
  }
});

module.exports = NewGame;
