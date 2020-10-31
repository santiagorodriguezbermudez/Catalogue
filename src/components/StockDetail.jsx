import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStockProfiles, fetchStockHistory } from '../actions/api';
import Chart from './Chart';
import '../assets/styles/stockdetail.css';
import { formatter } from '../constants/constants';
import Loading from './Loading';

const StockDetail = ({
  stock,
  fetchStock,
  fetchStockPrice,
  application,
}) => {
  const { stockName } = useParams();

  React.useEffect(() => {
    fetchStock(stockName);
    fetchStockPrice(stockName);
  }, []);

  const renderStockDetail = () => (
    <div>
      <Chart history={stock.history} />
      <section className="stock-general">
        <div className="stock-info">
          <ul>
            <li>{`Symbol: ${stock.symbol}`}</li>
            <li>{`Price: ${formatter.format(stock.price)}`}</li>
            <li>{`Market Cap: ${formatter.format(stock.mktCap)}`}</li>
            <li>{`Currency: ${stock.currency}`}</li>
            <li>{`Exchange: ${stock.exchange}`}</li>
          </ul>
        </div>
        <div className="stock-description">
          <p>{`CEO: ${stock.ceo}`}</p>
          <p>{`Description: ${stock.description}`}</p>
          <p>{`Sector: ${stock.sector}`}</p>
          <p>{`Industry: ${stock.industry}`}</p>
        </div>
        <div className="stock-contact-info">
          <ul>
            <li>{`Contact Phone: ${stock.phone}`}</li>
            <li>{`Address: ${stock.address}`}</li>
            <li>{`Country: ${stock.country}`}</li>
            <li>{`State: ${stock.state}`}</li>
            <li>{`City: ${stock.city}`}</li>
          </ul>
        </div>
      </section>
    </div>
  );

  return (
    <div>
      {application === 'LOADING' ? <Loading /> : renderStockDetail()}
    </div>
  );
};

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

StockDetail.propTypes = {
  stock: PropTypes.shape(stockItemShape).isRequired,
  fetchStock: PropTypes.func.isRequired,
  fetchStockPrice: PropTypes.func.isRequired,
  application: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    stock: state.stock,
    application: state.application,
  }
);

const mapDispatchToProps = dispatch => ({
  fetchStock: symbol => {
    dispatch(fetchStockProfiles(symbol));
  },
  fetchStockPrice: symbol => {
    dispatch(fetchStockHistory(symbol));
  },
});

const connectedStockDetail = connect(mapStateToProps, mapDispatchToProps)(StockDetail);

export default connectedStockDetail;
