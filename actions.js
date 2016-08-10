// Add an action creator function for each of the actions which you've listed.

// guess a number
var GUESS_NUM = 'GUESS_NUM';
var guessNum = function(num) {
  return {
    type: GUESS_NUM,
    num: num
  }
};

// show user if they are getting closer to the number

// show user if the number is wrong
var WRONG_NUM = 'WRONG_NUM';
var wrongNum = function(num) {
  return {
    type: WRONG_NUM,
    num: num
  }
};
// show user if the number is right and they won
var CORRECT_NUM = 'CORRECT_NUM';
var correctNum = function(num) {
  return {
    type: CORRECT_NUM,
    num: num
  }
};
// show the list of numbers chosen below
var LIST_NUM = 'LIST_NUM';
var listNum = function(numbers) {
  return {
    type: LIST_NUM,
    numbers: numbers
  }
};
// count the # of guesses
var CURRENT_GUESSES = 'CURRENT_GUESSES';
var currentGuesses = function(numbers) {
  return {
    type: CURRENT_GUESSES,
    numbers: numbers
  }
};
