import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Stock from '../components/Stock';
import { searchStocksAPI } from '../actions/api';
import '../assets/styles/stocklist.css';
import Loading from '../components/Loading';
import Filter from '../components/Filter';
import { filter } from '../actions/index';
import filterStocksByExchange from '../filters/filterStocksByExchange';

const StockList = ({ stockList, getStocks, application }) => {
  const renderStocks = () => stockList.map(stock => (
    <Stock key={stock.symbol} stock={stock} />
  ));

  React.useEffect(() => {
    getStocks('');
  }, []);

  const onChangeFilter = event => {
    filter(event.target.value);
  };

  const filterOptions = stockList => {
    const countObject = {};
    stockList.forEach(stock => {
      const key = JSON.stringify(stock.exchange);
      countObject[key] = (countObject[key] || 0) + 1;
    });
    return countObject;
  };

  return (
    <div>
      <Filter filterOptions={filterOptions} onChange={onChangeFilter} />
      <div className="stock-container">
        {application === 'LOADING' ? <Loading /> : renderStocks()}
      </div>
    </div>
  );
};

StockList.propTypes = {
  stockList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getStocks: PropTypes.func.isRequired,
  application: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    stockList: filterStocksByExchange(state.searchedStocks, state.filter),
    application: state.application,
  }
);

const mapDispatchToProps = dispatch => ({
  getStocks: (query, limit = 1000) => {
    dispatch(searchStocksAPI(query, limit));
  },
});

const connectedUserList = connect(mapStateToProps, mapDispatchToProps)(StockList);

export default connectedUserList;
