import { combineReducers } from 'redux';
import filter from './filter';
import stocks from './stocks';
import stock from './stock';

const combinedReducers = combineReducers({
  filter,
  stocks,
  stock,
});

export default combinedReducers;
