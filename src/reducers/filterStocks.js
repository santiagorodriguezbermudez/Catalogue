const filterStocks = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_STOCKS':
      return action.stocks.map(stock => ({
        symbol: stock.symbol,
        price: stock.price,
        companyName: stock.companyName,
        exchange: stock.exchange,
        website: stock.website,
        image: stock.image,
      }));
    default:
      return state;
  }
};

export default filterStocks;
