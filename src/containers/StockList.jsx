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

const StockList = ({
  stockList,
  getStocks,
  application,
  setFilter,
}) => {
  const renderStocks = () => stockList.map(stock => (
    <Stock key={stock.symbol} stock={stock} />
  ));

  React.useEffect(() => {
    getStocks('');
  }, []);

  const onChangeFilter = event => {
    setFilter(event.target.value.trim());
  };

  const filterOptions = stockList => {
    const countObject = {};
    stockList.forEach(stock => {
      const key = stock.exchange;
      countObject[key] = (countObject[key] || 0) + 1;
    });
    return countObject;
  };

  return (
    <div>
      <Filter filterOptions={filterOptions(stockList)} onChange={onChangeFilter} />
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
  setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    stockList: filterStocksByExchange(state.searchedStocks, state.filter),
    application: state.application,
  }
);

const mapDispatchToProps = dispatch => ({
  getStocks: (query, limit = 200) => {
    dispatch(searchStocksAPI(query, limit));
  },
  setFilter: label => {
    dispatch(filter(label));
  },
});

const connectedUserList = connect(mapStateToProps, mapDispatchToProps)(StockList);

export default connectedUserList;
