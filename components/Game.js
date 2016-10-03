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
