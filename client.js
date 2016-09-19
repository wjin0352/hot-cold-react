import React from 'react';
import { render } from 'react-dom';
// css through webpack
// import css from './styles/style';
// import components
import Main from './components/Main';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ModalInformationBox from './components/ModalInformationBox';
import Game from './components/Game';
import App from './containers/App';
// import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store} >
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Game}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('app'));
