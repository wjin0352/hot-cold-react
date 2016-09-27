import React from 'react';
import { newGame } from '../actions';
import store from '../store'
import { connect } from 'react-redux'
import NavigationView from '../components/NavigationView';
import initialState from '../reducers'

// this is the container for NavigationView
const mapStateToProps = (state) => {
  return {
    game: state
  }
}

// value of data should now be coming from the reference you made in mapStateToProps
const mapDispatchToProps = (dispatch) => {
  return {
    onNewGameClick: (game) => {
      dispatch(newGame(game))
    }
  }
}

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationView);

export default Navigation;
