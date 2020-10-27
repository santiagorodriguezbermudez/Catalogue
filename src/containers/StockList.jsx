import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Stock from '../components/Stock';
import { searchStocksAPI } from '../actions/api';

const StockList = ({ stockList, getStocks }) => {
  const renderStocks = () => stockList.map(stock => (
    <Stock key={stock.symbol} stock={stock} />
  ));

  React.useEffect(() => {
    getStocks('');
  }, []);

  return (
    <div>
      <div>
        {renderStocks()}
      </div>
    </div>
  );
};

StockList.propTypes = {
  stockList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getStocks: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    stockList: state.stocks,
  }
);

const mapDispatchToProps = dispatch => ({
  getStocks: (query, limit = 15) => {
    dispatch(searchStocksAPI(query, limit));
  },
});

const connectedUserList = connect(mapStateToProps, mapDispatchToProps)(StockList);

export default connectedUserList;
