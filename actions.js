export function guessCount (guess_count) {
  return {
    type: 'GUESS_COUNT',
    guess_count: guess_count
  }
}

export function guessArray (guess_array) {
  return {
    type: GUESS_ARRAY,
    guess_array: guess_array
  }
};

export function targetNumber (targetNumber) {
  return {
    type: TARGET_NUMBER,
    targetNumber: targetNumber
  }
};

export function addWins (addWins) {
  return {
    type: ADD_WINS,
    addWins: addWins
  }
};

export function newGame () {
  return {
    type: NEW_GAME
  }
};
