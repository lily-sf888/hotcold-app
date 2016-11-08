var React = require('react');
var actions = require('../actions/index');

var NewGame = React.createClass({
  componentDidMount: function() {
      this.props.dispatch(actions.fetchDescription(this.props.fewestGuesses));
  },
  onClick: function() {
    this.props.dispatch(actions.newGame());
  },
  render: function() {
    return (
        <nav>
          <ul className='clearfix'>
            <li id="new-game" ><a onClick={this.onClick} className="new" href=''>+ New Game</a></li>
            <li className='guess' >{this.props.fewestGuesses ? this.props.fewestGuesses : ''}</li>
          </ul>
        </nav>
     )
  }
});

module.exports = NewGame;
