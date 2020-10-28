const stocks = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STOCKS':
      return [
        ...state,
        ...action.stocks.map(stock => ({
          symbol: stock.symbol,
          price: stock.price,
          companyName: stock.companyName,
          exchange: stock.exchange,
          website: stock.website,
          image: stock.image,
        })),
      ];
    default:
      return state;
  }
};

export default stocks;
