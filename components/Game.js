import React from 'react';
// import GameContainer from '../containers/GameContainer';

const Game = React.createClass({
  render: function() {
    return (
      <div className='game'>
        <section className="game">
          <h2 id="feedback">{this.props.guess.msg}</h2>
          <form>
            <input ref='userGuess' type="text" name="userGuess" id="userGuess" className="text" maxLength="3"  placeholder="Enter your Guess" required/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.props.handleGuess}/>
          </form>
          <p>Guess #<span id="count">{this.props.guessCount}</span>!</p>
          <ul id="guessList" className="guessBox clearfix">{this.props.guessList}</ul>
        </section>
      </div>
    )
  }
})

export default Game;
