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
    break;
    case 'USER_GUESS':
      let playerGuess = action.guess;
      let guessArrayLength = state.currentGame.guessArray.length;
      let guessArray = state.currentGame.guessArray;
      let answer = state.currentGame.targetNumber;
      let repeatGuess = false;
      let msg = '';
      let comparision = Math.abs(answer - playerGuess);
      // check playerGuess to know if its within 0-100
      if (playerGuess < 0 || playerGuess > 100) {
        alert('Stay within 0-100 please');
      } else if (guessArrayLength > 0) {
        guessArray.forEach(function(obj, idx) {
          if (playerGuess == obj) {
            repeatGuess = true;
          };
        });
      };
      // check playerGuess for repeat guess
      if (repeatGuess) {
        alert('Sorry you already chose this number');
        repeatGuess = false;
        return;
      }
      // compare the playerGuess to the correct answer
      if (answer == playerGuess) {
        msg = 'Great job, you won!';
      } else if (comparision <= 10) {
        msg = 'hot';
      } else if (comparision <= 20) {
        msg = 'getting warmer';
      } else if (comparision <= 30) {
        msg = 'warm';
      } else if (comparision <= 40) {
        msg = 'cold';
      } else if (comparision <= 50) {
        msg = 'ice cold';
      } else if (comparision > 50) {
        msg = 'frozen tundra';
      };
      // create new state and return to user
      return Object.assign({}, state, {
        currentGame: {
          targetNumber: answer,
          guessArray: [...guessArray, action.guess],
          guessCount: state.currentGame.guessCount + 1,
          msg: msg,
          userGuess: playerGuess
        },
        games: [
          {}
        ]
      })
    break;
  default:
    return state;
  }
}

export default game;
