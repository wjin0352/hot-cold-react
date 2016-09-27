import * as actions from '../actions';

const initialState = {
  currentGame: {
    targetNumber: Math.floor(Math.random() * 100) + 1,
    guessArray: [],
    guessCount: 0,
    msg: '',
    userGuess: ''
  },
  games: [
    {}
  ]
};

const game = function (state = initialState, action) {
  switch(action.type) {
    case 'NEW_GAME':
      return Object.assign({}, state, {
        currentGame: {
          targetNumber: Math.floor(Math.random() * 100) + 1,
          guessArray: [],
          guessCount: 0,
          msg: 'Starting a new Game!',
          userGuess: ''
        },
        games: [
          {}
        ]
      })
    case 'USER_GUESS':
      return Object.assign({}, state, {
        guessArray: [...state.currentGame.guessArray, action.userGuess],
        guessCount: state.currentGame.guessCount + 1,
        userGuess: action.guess,
        msg: action.msg
      })
  default:
    return state;
  }
}

export default game;
