const stocks = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STOCKS':
      return action.stocks.map(stock => ({
        symbol: stock.symbol,
        price: stock.price,
        companyName: stock.companyName,
        currency: stock.currency,
        sector: stock.sector,
        industry: stock.industry,
        exchange: stock.exchange,
        website: stock.website,
      }));
    default:
      return state;
  }
};

export default stocks;
