import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({ stock }) => (
  <div>
    <br />
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
    <br />
  </div>
);

const stockItemShape = {
  symbol: PropTypes.string,
  price: PropTypes.number,
  companyName: PropTypes.string,
  currency: PropTypes.string,
  sector: PropTypes.string,
  website: PropTypes.string,
  industry: PropTypes.string,
  exchange: PropTypes.string,
};

Stock.propTypes = {
  stock: PropTypes.shape(stockItemShape).isRequired,
};

export default Stock;
