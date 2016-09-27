import game from './game';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  game
});

module.exports = allReducers;
