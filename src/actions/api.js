import axios from 'axios';
import {
  REACT_APP_API_URL,
  REACT_APP_API_KEY,
} from '../constants/constants';
import {
  fetchStocks,
  showStock,
  searchedStocks,
  addPriceStock,
  updateState,
  filter,
} from './index';

const convertSymbolsArrayToString = symbolsArray => (
  symbolsArray.length === 0 ? '' : symbolsArray.reduce((stringSymbols, symbol) => `${stringSymbols},${symbol}`)
);

export const fetchStockProfiles = stockName => (dispatch => {
  dispatch(updateState('LOADING'));
  axios({
    method: 'GET',
    url: `${REACT_APP_API_URL}/profile/${stockName}`,
    params: {
      apikey: REACT_APP_API_KEY,
    },
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    // Check if its one profile or several.
    if (response.data.length <= 1) {
      dispatch(showStock(response.data[0]));
      dispatch(updateState('IDLE'));
    } else {
      dispatch(fetchStocks(response.data));
      dispatch(searchedStocks(response.data));
      dispatch(updateState('IDLE'));
    }
  }).catch(error => {
    console.log(`We have an error when fetching profiles ${error}`);
    dispatch(fetchStocks([]));
  });
});

export const searchStocksAPI = (query, limit = 10) => dispatch => {
  dispatch(updateState('LOADING'));
  axios({
    method: 'GET',
    url: `${REACT_APP_API_URL}/search`,
    params: {
      apikey: REACT_APP_API_KEY,
      query: query || '',
      limit: limit.toString(),
    },
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    const stockSymbolsArray = response.data.map(stock => stock.symbol);
    dispatch(filter('ALL'));
    dispatch(fetchStockProfiles(convertSymbolsArrayToString(stockSymbolsArray)));
    dispatch(updateState('IDLE'));
  }).catch(error => {
    console.log(`We got this error on search: ${error}`);
  });
};

export const fetchStockHistory = stockName => (dispatch => {
  dispatch(updateState('LOADING'));
  axios({
    method: 'GET',
    url: `${REACT_APP_API_URL}/historical-price-full/${stockName}/?serietype=line`,
    params: {
      apikey: REACT_APP_API_KEY,
    },
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    dispatch(addPriceStock(response.data.historical));
    dispatch(updateState('IDLE'));
  }).catch(error => {
    console.log(`We have an error fetching the stock profile ${error}`);
    dispatch(addPriceStock([]));
  });
});
