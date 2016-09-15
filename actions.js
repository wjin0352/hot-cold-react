const GUESS_COUNT = 'GUESS_COUNT';
const guessCount = function(guess_count) {
  return {
    type: 'GUESS_COUNT',
    guess_count: guess_count
  }
}

const GUESS_ARRAY = 'GUESS_ARRAY';
const guessArray = function(guess_array) {
  return {
    type: GUESS_ARRAY,
    guess_array: guess_array
  }
};

const TARGET_NUMBER = 'TARGET_NUMBER';
const targetNumber = function(targetNumber) {
  return {
    type: TARGET_NUMBER,
    targetNumber: targetNumber
  }
};

const ADD_WINS = 'ADD_WINS';
const addWins = function(addWins) {
  return {
    type: ADD_WINS,
    addWins: addWins
  }
};

exports.GUESS_COUNT = GUESS_COUNT;
exports.guessCount = guessCount;
exports.GUESS_ARRAY = GUESS_ARRAY;
exports.guessArray = guessArray;
exports.TARGET_NUMBER = TARGET_NUMBER;
exports.targetNumber = targetNumber;
exports.ADD_WINS = ADD_WINS;
exports.addWins = addWins;
