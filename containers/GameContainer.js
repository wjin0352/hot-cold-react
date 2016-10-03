import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import Game from '../components/Game';
import initialState from '../reducers';

const mapStateToProps = (state) => {
  console.log('state.game is', state.game)
  return {
    guess: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGuess: (playerGuess) => {
      dispatch(actions.userGuess(playerGuess))
    }
  }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
