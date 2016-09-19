import React from 'react';
import Header from './Header';
import ModalInformationBox from './ModalInformationBox';
import actions from '../actions'

const Main = React.createClass({
  render() {
    return (
      <div>
      {console.log(this.props, 'hi')}
        <Header/>
        <ModalInformationBox/>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;
