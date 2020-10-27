const stocks = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STOCKS':
      return action.stocks.map(stock => ({
        id: stock.id,
      }));
    default:
      return state;
  }
};

export default stocks;
