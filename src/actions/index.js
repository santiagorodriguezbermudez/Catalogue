export const fetchStocks = stocks => ({
  type: 'FETCH_STOCKS',
  stocks,
});

export const filter = stocks => ({
  type: 'CHANGE_FILTER',
  stocks,
});

export const showStock = stock => ({
  type: 'SHOW_STOCK',
  stock,
});
