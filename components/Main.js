import React from 'react';
import Header from './Header';
import ModalInformationBox from './ModalInformationBox';
import GameContainer from '../containers/GameContainer';
import actions from '../actions';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <ModalInformationBox/>
        <GameContainer/>
      </div>
    )
  }
});

export default Main;
