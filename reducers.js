// import * as actions from './actions';
// import { combineReducers } from 'redux';

// const initialState = {
//   currentGame: {
//     targetNumber: Math.floor(Math.random() * 100) + 1,
//     guessArray: [1],
//     guessCount: 0,
//     msg: 'asdf',
//     userGuess: 'some guess'
//   },
//   games: [
//     {}
//   ]
// };

// const newGameReducer = function (state = initialState, action) {
//   switch(action.type) {
//     case 'NEW_GAME':
//       return Object.assign({}, state, {
//         targetNumber: Math.floor(Math.random() * 100) + 1,
//         guessArray: ['some guess'],
//         guessCount: 0,
//         msg: 'Starting New Game!',
//         userGuess: ''
//       })
//   default:
//     return state;
//   }
// }

// const userGuessReducer = function (state = initialState, action) {
//   switch(action.type) {
//     case 'USER_GUESS':
//       return Object.assign({}, state, {
//         guessArray: [...state.guessArray, action.userGuess],
//         guessCount: action.guessCount + 1,
//         userGuess: action.userGuess
//       })
//     default:
//       return state;
//   }
// }


// // combine all reducers into one (should be done in a seperate file..)
// const allReducers = combineReducers({
//   newGameReducer,
//   userGuessReducer
// });

// module.exports = allReducers;
