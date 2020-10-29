import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStockProfiles } from '../actions/api';
import Chart from '../containers/Chart';

const StockDetail = ({ stock, fetchStock }) => {
  const { stockName } = useParams();

  React.useEffect(() => {
    fetchStock(stockName);
  }, [stock]);

  const renderStockDetails = stock => {
    const stockObjectArray = Object.entries(stock);
    return (
      stockObjectArray.map(stockAttributes => {
        const attributeName = stockAttributes[0];
        const attributeValue = stockAttributes[1];

        return (
          <li key={attributeName}>
            {attributeName}
            {': '}
            {attributeValue}
          </li>
        );
      })
    );
  };

  return (
    <div>
      <Chart />
      <ul>
        {renderStockDetails(stock)}
      </ul>
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
};

const mapStateToProps = state => (
  {
    stock: state.stock,
  }
);

const mapDispatchToProps = dispatch => ({
  fetchStock: symbol => {
    dispatch(fetchStockProfiles(symbol));
  },
});

const connectedStockDetail = connect(mapStateToProps, mapDispatchToProps)(StockDetail);

export default connectedStockDetail;
