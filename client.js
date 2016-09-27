import React from 'react';
import { render } from 'react-dom';
// css through webpack
// import css from './styles/style';
// import components
import Main from './components/Main';
import Header from './components/Header';
import NavigationView from './components/NavigationView';
import ModalInformationBox from './components/ModalInformationBox';
import Game from './components/Game';
import GameContainer from './containers/GameContainer';
// import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Game}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));
