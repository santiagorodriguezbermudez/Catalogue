import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/stockindex.css';
import errorImage from '../assets/images/error.jpg';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const Stock = ({ stock }) => (
  <div
    className="stock-index-card"
  >
    <div className="relative">
      <img
        src={stock.image}
        alt="company"
        className="w-full"
        onError={e => {
          e.target.onerror = null;
          e.target.src = errorImage;
        }}
      />
      <span className="absolute bottom-0 right-0">{stock.symbol}</span>
    </div>
    <div className="p-2">
      <p className="text-2xl">
        Company Name:
        {stock.companyName}
      </p>
      <p className="text-xl">
        Price:
        {formatter.format(stock.price)}
      </p>
      <p>
        Exchange:
        {stock.exchange}
      </p>
      <Link to={`/stocks/${stock.symbol}`}>More Information</Link>
    </div>
  </div>
);

const stockItemShape = {
  symbol: PropTypes.string,
  price: PropTypes.number,
  companyName: PropTypes.string,
  website: PropTypes.string,
  exchange: PropTypes.string,
};

Stock.propTypes = {
  stock: PropTypes.shape(stockItemShape).isRequired,
};

export default Stock;
