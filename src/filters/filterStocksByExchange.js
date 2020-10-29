const filterStocksByExchange = (stockList, exchange) => {
  let filteredStocks;
  if (exchange.toUpperCase() === 'ALL') {
    filteredStocks = [...stockList];
  } else {
    filteredStocks = stockList.filter(stock => stock.exchange === exchange);
  }
  return filteredStocks;
};

export default filterStocksByExchange;
