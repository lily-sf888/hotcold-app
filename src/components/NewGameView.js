var React = require('react');
var actions = require('../actions/index');

var NewGame = React.createClass({

  onClick: function() {
    this.props.dispatch(actions.newGame());
  },
  render: function() {
    return (
        <header>
    		  <nav>
    				<ul className="clearfix">
    				  <li id="new-game" ><a className="new" href="#" onClick={this.onClick} >+ New Game</a></li>
    				</ul>
    			</nav>
    	
    		</header>
     )
  }
});

module.exports = NewGame;
