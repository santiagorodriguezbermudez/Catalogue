// import axios from 'axios';
// import { API_URL, API_KEY } from '../constants/constants';

export const fetchStocks = stocks => ({
  type: 'FETCH_STOCKS',
  stocks,
});

export const filter = label => ({
  type: 'CHANGE_FILTER',
  label,
});

export const showStock = stock => ({
  type: 'SHOW_STOCK',
  stock,
});
