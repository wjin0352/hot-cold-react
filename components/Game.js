import React from 'react';

const Game = React.createClass({
  handleGuess: function () {
  //   // get user guess through ref attribute as this.refs.refName.value
  //     const guess = this.refs.userGuess.value;
  //   // call a method to check user guess against winning number and respond with correct message
  //     checkGuess(guess);
  //   // call dispatching method with the user guess and return message.
  //   this.props.dispatchGuess(guess, msg)
  // },
  // checkGuess: function (guess) {
  //   const guessNum = parseInt(guess);
  //   switch (guessNum) {
  //     case ()
  //   }
  //   return msg;
  },
  render: function () {
    return (
      <div className='game'>
        <section className="game">
          <h2 id="feedback">{this.props.guess.currentGame.msg}</h2>
          <form>
            <input ref='userGuess' type="text" name="userGuess" id="userGuess" className="text" maxLength="3"  placeholder="Enter your Guess" required/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.handleGuess}/>
          </form>
          <p>Guess #<span id="count">{this.props.guess.currentGame.guessCount}</span>!</p>
          <ul id="guessList" className="guessBox clearfix">{this.props.guess.currentGame.guessArray}</ul>
        </section>
      </div>
    )
  }
})

export default Game;
