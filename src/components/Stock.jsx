import React from 'react';

const Stock = stock => (
  <div>
    symbol:
    {stock.symbol}
    price:
    {stock.price}
    companyName:
    {stock.companyName}
    currency:
    {stock.currency}
    sector:
    {stock.sector}
    industry:
    {stock.industry}
    exchange:
    {stock.exchange}
    website:
    {stock.website}
  </div>
);

export default Stock;
