import React from 'react';
import actions from '../actions';
import store from '../store';

const NavigationView = ({ onNewGameClick, data }) => {
  return (
    <div>
      <nav>
        <ul className="clearfix">
          <li><a className="what" href="#" >What ?</a></li>
          <li><a className="new" href="#" onClick={onNewGameClick}>+ New Game</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationView;

