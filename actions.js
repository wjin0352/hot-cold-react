// Add an action creator function for each of the actions which you've listed.

// a global guess count
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

// guess a number
// const GUESS_NUM = 'GUESS_NUM';
// const guessNum = function(guess_num) {
//   return {
//     type: 'GUESS_NUM',
//     guess_num: guess_num
//   }
// };

// const GUESS_LIST = 'GUESS_LIST';
// const guessList = function(guess_list) {
//   return {
//     type: 'GUESS_LIST',
//     guess_list: guess_list
//   }
// };

// const COUNT = 'COUNT';
// const countNum = function(count_num) {
//   return {
//     type: 'COUNT',
//     count_num: count_num
//   }
// };

// const FEED_BACK = 'FEED_BACK';
// const feedBack = function(feed_back) {
//   return {
//     type: 'FEED_BACK',
//     feed_back: feed_back
//   }
// };

// const REPEAT_GUESS = 'REPEAT_GUESS';
// const repeatGuess = function(repeat_guess) {
//   return {
//     type: 'REPEAT_GUESS',
//     repeat_guess: repeat_guess
//   }
// };
// show user if they are getting closer to the number

// show user if the number is wrong
// var WRONG_NUM = 'WRONG_NUM';
// var wrongNum = function(wrong_num) {
//   return {
//     type: WRONG_NUM,
//     wrong_num: wrong_num
//   }
// };
// show user if the number is right and they won
// var CORRECT_NUM = 'CORRECT_NUM';
// var correctNum = function(correct_num) {
//   return {
//     type: CORRECT_NUM,
//     correct_num: correct_num
//   }
// };

exports.GUESS_COUNT = GUESS_COUNT;
exports.guessCount = guessCount;
// exports.GUESS_NUM = GUESS_NUM;
// exports.guessNum = guessNum;
// exports.GUESS_LIST = GUESS_LIST;
// exports.guessList = guessList;
// exports.COUNT = COUNT;
// exports.countNum = countNum;
// exports.FEED_BACK = FEED_BACK;
// exports.feedBack = feedBack;
exports.GUESS_ARRAY = GUESS_ARRAY;
exports.guessArray = guessArray;
// exports.REPEAT_GUESS = REPEAT_GUESS;
// exports.repeatGuess = repeatGuess;
// exports.WRONG_NUM = WRONG_NUM;
// exports.wrongNum = wrongNum;
// exports.CORRECT_NUM = CORRECT_NUM;
// exports.correctNum = correctNum;
