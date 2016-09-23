import React from 'react';
import Header from './Header';
import ModalInformationBox from './ModalInformationBox';
import actions from '../actions'

const Main = React.createClass({
  render() {
    return (
      <div>
        <Header/>
        <ModalInformationBox/>
      </div>
    )
  }
});

export default Main;
