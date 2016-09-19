import React from 'react';
import * as actions from '../actions';
import store from '../store'

const Navigation = React.createClass({
  newGameDispatcher: function() {
    console.log(store)
    // this.props.dispatch(actions.newGame);
    console.log(store.dispatch(actions.newGame))
  },
  render: function () {
  return (
    <nav>
      <ul className="clearfix">
        <li><a className="what" href="#" >What ?</a></li>
        <li><a className="new" href="#" onClick={this.newGameDispatcher}>+ New Game</a></li>
      </ul>
    </nav>
    )
  }
});

module.exports = Navigation;

