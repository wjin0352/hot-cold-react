import * as actions from './actions';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
  currentGame: {
    targetNumber: null,
    guess_array: [],
    msg: ''
  },
  games: [
    {}
  ]
};

// state represents what state was last time the reducer was called. (old state)
// so state has the last known state, and action contains and represents the newest state
// so you are always getting the old state and creating a new object with the new state given and returning it to the user.
const guessCountReducer = function(state, action) {
  state = state || initialState.currentGame.guess_array.length;
  switch(action.type) {
    case 'GUESS_COUNT':
      const increment_count = action.guess_array.length;
      return increment_count + 1;
  default:
    return state;
  }
}

const guessArrayReducer = function(state, action) {
  state = state || initialState.currentGame.guess_array;
  switch(action.type) {
    case 'GUESS_ARRAY':
      return state.concat(action.guess_array);
  default:
    return state;
  }
}

const targetNumberReducer = function (state, action) {
  state = state || initialState.currentGame.targetNumber;
  switch(action.type) {
    case 'TARGET_NUMBER':
      const new_target = action.targetNumber;
      return new_target;
  default:
    return state;
  }
}


const newGameReducer = function (state, action) {
  state = state || initialState.currentGame;
  switch(action.type) {
    case 'NEW_GAME':
      const result = Object.assign({}, {
        targetNumber: null,
        guess_array: [],
        msg: 'Starting New Game!'});
        return result;
  default:
    return state;
  }
}

// combine all reducers into one
// we include routing, to take care of changing routes on the site
const allReducers = combineReducers({
  guessCountReducer: guessCountReducer,
  guessArrayReducer: guessArrayReducer,
  targetNumberReducer: targetNumberReducer,
  newGameReducer: newGameReducer,
  routing: routerReducer
});

// export default allReducers;
module.exports = allReducers;
// module.exports = initialState;
