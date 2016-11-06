var React = require('react');
var actions = require('../actions/index');

var NewGame = React.createClass({
  onClick: function() {
    this.props.dispatch(actions.newGame());
  },
  render: function() {
    return (
        <nav>
          <ul className="clearfix">
            <li id="new-game" ><a onClick={this.onClick} className="new" href="#">+ New Game</a></li>
          </ul>
        </nav>
     )
  }
});

module.exports = NewGame;
