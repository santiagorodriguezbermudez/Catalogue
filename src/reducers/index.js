import { combineReducers } from 'redux';
import filter from './filter';
import searchedStocks from './searchedStocks';
import stocks from './stocks';
import stock from './stock';
import application from './application';

const combinedReducers = combineReducers({
  filter,
  application,
  searchedStocks,
  stocks,
  stock,
});

export default combinedReducers;
