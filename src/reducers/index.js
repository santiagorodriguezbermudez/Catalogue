import { combineReducers } from 'redux';
import filter from './filter';
import stocks from './stocks';
import stock from './stock';
import application from './application';

const combinedReducers = combineReducers({
  application,
  filter,
  stocks,
  stock,
});

export default combinedReducers;
