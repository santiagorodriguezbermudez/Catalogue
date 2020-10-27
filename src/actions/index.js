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
