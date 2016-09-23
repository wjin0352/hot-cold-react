import React from 'react';
import NavigationView from './NavigationView';
import Navigation from '../containers/Navigation';

const Header = React.createClass({
  render() {
    return (
      <div>
        <Navigation/>
        <h1>HOT or COLD</h1>
      </div>
    )
  }
});

module.exports = Header;
