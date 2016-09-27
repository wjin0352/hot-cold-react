export function addWin (addWin) {
  return {
    type: 'ADD_WIN',
    addWin
  }
};

export function newGame (newGame) {
  return {
    type: 'NEW_GAME',
    newGame
  }
};

export function userGuess (guess) {
  return {
    type: 'USER_GUESS',
    guess,
    msg
  }
};
