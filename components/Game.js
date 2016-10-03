import React from 'react';

const Game = React.createClass({
  handleGuess: function (e) {
    e.preventDefault();
    // get user guess through ref attribute as this.refs.refName.value
    const playerGuess = this.refs.userGuess.value;
    // to affect state logic from store we do it in the reducer so make a call to a reducer
    this.props.dispatchGuess(playerGuess);
  },
  render: function () {
    console.log('winning number is: ', this.props.guess.currentGame.targetNumber)
    return (
      <div className='game'>
        <section className="game">
          <h2 id="feedback">{this.props.guess.currentGame.msg}</h2>
          <form onSubmit={this.handleGuess}>
            <input ref='userGuess' type="text" name="userGuess" id="userGuess" className="text" maxLength="3"  placeholder="Enter your Guess" required/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
          </form>
          <p>Guess #<span id="count"> {this.props.guess.currentGame.guessCount}</span>!</p>
          <ul id="guessList" className="guessBox clearfix">{this.props.guess.currentGame.guessArray}</ul>
        </section>
      </div>
    )
  }
})

export default Game;


// checkGuess: function (playerGuess) {
//     let arrayLength = this.props.guess.currentGame.guessArray.length;
//     let guesses = this.props.guess.currentGame.guessArray;
//     let repeatGuess = false;
//     // const guessNum = parseInt(guess);
//     if (playerGuess < 0 || playerGuess > 100) {
//       alert('Stay within 0 - 100 please');
//     } else if (arrayLength > 0) {
//       guesses.forEach(function (guess, idx) {
//         if (playerGuess == guess) {
//           repeatGuess = true;
//         };
//       });
//     };

//     if (repeatGuess) {
//       alert('you chose this number already');
//       repeatGuess = false;
//       return;
//       } else {

//       }

//   },
  // compareAnswer: function () {
    // return;
  // },
