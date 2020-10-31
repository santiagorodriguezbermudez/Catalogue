export const fetchStocks = stocks => ({
  type: 'FETCH_STOCKS',
  stocks,
});

export const searchedStocks = stocks => ({
  type: 'SEARCHED_STOCKS',
  stocks,
});

export const showStock = stock => ({
  type: 'SHOW_STOCK',
  stock,
});

export const addPriceStock = history => ({
  type: 'ADD_PRICE_TO_STOCK',
  history,
});

export const updateState = newState => ({
  type: 'UPDATE_STATE',
  newState,
});

export const filter = label => ({
  type: 'FILTER',
  label,
});
