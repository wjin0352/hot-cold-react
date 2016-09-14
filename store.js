import redux from 'redux';
import { createStore } from 'redux'

import allReducers from './reducers';

const store = createStore(allReducers);
module.exports = store;
