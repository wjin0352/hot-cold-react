import React from 'react';
import * as actions from '../actions';
import store from '../store';
import { connect } from 'react-redux';
import Game from '../components/Game';
import initialState from '../reducers';

const mapStateToProps = (state) => {
  console.log('state.game is', state.game)
  console.log('state.game.currentGame.targetNumber', state.game.currentGame.targetNumber)
  return {
    guess: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGuess: (guess, msg) => {

      dispatch(actions.userGuess(guess, msg))
    }
  }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);

export default GameContainer;
