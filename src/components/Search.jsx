import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { searchStocksAPI } from '../actions/api';
import '../assets/styles/search.css';

const Search = ({ stocks, searchStocks, toogleVisibility }) => {
  // Create a state for the user input
  const [suggestions, setSuggestions] = React.useState([]);
  const [value, setNewValue] = React.useState('');

  const getSuggestedStock = stockNameInput => {
    if (stockNameInput.length === 0) {
      return [];
    }
    const stockName = stockNameInput.trim().toLowerCase();
    return stocks.filter(stock => {
      const stockCompanyName = stock.companyName.toLowerCase().slice(0, stockName.length);
      return stockCompanyName === stockName;
    });
  };

  const renderSuggestion = suggestion => (
    <div>
      {`${suggestion.companyName} -> ${suggestion.website}`}
    </div>
  );

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const onSuggestionsFetchRequested = ({ value }) => (
    setSuggestions(getSuggestedStock(value))
  );

  const getSuggestionValue = suggestion => suggestion.companyName;

  const onChange = (event, { newValue }) => {
    setNewValue(newValue);
  };

  // Specify what to do when the user hits enter for submitting the query
  const onKeyDown = event => {
    switch (event.keyCode) {
      case 13:
        if (value.length > 0) {
          searchStocks(value);
        }
        toogleVisibility();
        setNewValue('');
        break;
      case 27:
        toogleVisibility();
        setNewValue('');
        break;
      default:
    }
  };

  // Configure the search auto suggest component
  const inputProps = {
    placeholder: 'Type the name of the company stock',
    value,
    onChange,
    onKeyDown,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

Search.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchStocks: PropTypes.func.isRequired,
  toogleVisibility: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    stocks: state.stocks,
  }
);

const mapDispatchToProps = dispatch => ({
  searchStocks: (query, limit = 15) => {
    dispatch(searchStocksAPI(query, limit));
  },
});

const connectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search);

export default connectedSearch;
