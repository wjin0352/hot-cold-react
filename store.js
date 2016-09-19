import redux from 'redux';
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import root reducer
import allReducers from './reducers';

console.log(allReducers)
const store = createStore(allReducers, allReducers.initialState);
// const store = createStore(allReducers, defaultState);

// stores browerHistory into the syncHistory
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
