import actions from './actions';
import { combineReducers } from 'redux';

const initialState = {
  guess_count: 0,
  guess_array: []
};

// state represents what state was last time the reducer was called. (old state)
// so state has the last known state, and action contains and represents the newest state
// so you are always getting the old state and creating a new object with the new state given and returning it to the user.
const guessCountReducer = function(state, action) {
  console.log(state, action);
  state = state || initialState.guess_count;
  switch(action.type) {
    case 'GUESS_COUNT':
      const increment_count = state;
      return increment_count + 1;
  default:
    return state;
  }
}

const guessArrayReducer = function(state, action) {
  state = state || initialState.guess_array;
  switch(action.type) {
    case 'GUESS_ARRAY':
      return state.concat({
        guess_array: action.guess_array;
      }});
  default:
    return state;
  }
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
