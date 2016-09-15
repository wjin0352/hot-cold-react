import actions from './actions';
import { combineReducers } from 'redux';

const initialState = {
  currentGame: {
    targetNumber: null,
    guess_array: []
  },
  games: [
    {}
  ]
};

// state represents what state was last time the reducer was called. (old state)
// so state has the last known state, and action contains and represents the newest state
// so you are always getting the old state and creating a new object with the new state given and returning it to the user.
const guessCountReducer = function(state, action) {
  console.log(state, action);
  state = state || initialState.guess_array.length;
  switch(action.type) {
    case 'GUESS_COUNT':
      const increment_count = action.guess_array.length;
      return increment_count + 1;
  default:
    return state;
  }
}

const guessArrayReducer = function(state, action) {
  state = state || initialState.guess_array;
  switch(action.type) {
    case 'GUESS_ARRAY':
      return state.concat(action.guess_array);
  default:
    return state;
  }
}

const targetNumberReducer = function (state, action) {
  state = state || initialState.targetNumber;
  switch()
}



// const guessListReducer = function (state, action) {
//   state = state || initialState.guess_list;
//   switch (action.type) {
//     case 'GUESS_LIST':
//       if (action.type === actions.GUESS_LIST) {
//         return state.concat({
            // action.guess_list
          // })
//       }
//   default:
//     return state;
//   }
// };


exports.guessCountReducer = guessCountReducer;
exports.guessArrayReducer = guessArrayReducer;

// exports.guessListReducer = guessListReducer;

// combine all reducers into one
const allReducers = combineReducers({
  guessCountReducer: guessCountReducer,
  guessArrayReducer: guessArrayReducer
})

export default allReducers;
