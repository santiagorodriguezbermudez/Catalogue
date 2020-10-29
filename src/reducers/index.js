import { combineReducers } from 'redux';
import filterStocks from './filterStocks';
import stocks from './stocks';
import stock from './stock';
import application from './application';

const combinedReducers = combineReducers({
  application,
  filterStocks,
  stocks,
  stock,
});

export default combinedReducers;
