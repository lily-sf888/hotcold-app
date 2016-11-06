var React = require('react');
var actions = require('../actions/index');

var NewGame = React.createClass({
  render: function() {
    return (
      <div>
        onClick: function() {
          this.props.dispatch(actions.newGame());
        }
        <a class="new" href="#" onClick={this.onClick} >+ New Game</a>
      </div>
    )
  }
});

module.exports = NewGame;
