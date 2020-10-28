const filter = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
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

export default filter;
