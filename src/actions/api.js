import axios from 'axios';
import {
  API_URL,
  API_KEY,
  mockStocks,
} from '../constants/constants';
import { fetchStocks, showStock } from './index';

// Mock API for not triggering API testing calls
export const fetchMockStocks = () => dispatch => {
  dispatch(fetchStocks(mockStocks));
};

const convertSymbolsArrayToString = symbolsArray => (
  symbolsArray.length === 0 ? '' : symbolsArray.reduce((stringSymbols, symbol) => `${stringSymbols},${symbol}`)
);

export const fetchStockProfiles = stockName => (
  dispatch => {
    axios({
      method: 'GET',
      url: `${API_URL}/profile/${stockName}`,
      params: {
        apikey: API_KEY,
      },
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      // Check if its one profile or several.
      if (response.data.length <= 1) {
        dispatch(showStock(response.data));
      } else {
        dispatch(fetchStocks(response.data));
      }
    }).catch(error => {
      console.log(`We have an error when fetching profiles ${error}`);
      dispatch(fetchStocks([]));
    });
  }
);

export const searchStocksAPI = (query, limit = 10) => (
  () => {
    axios({
      method: 'GET',
      url: `${API_URL}/search`,
      params: {
        apikey: API_KEY,
        query: query || '',
        limit: limit.toString(),
      },
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      const stockSymbolsArray = response.data.map(stock => stock.symbol);
      fetchStockProfiles(convertSymbolsArrayToString(stockSymbolsArray));
    }).catch(error => {
      console.log(`We got this error on search: ${error}`)
    });
  }
);
