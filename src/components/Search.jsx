import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

const Search = ({ stocks }) => {
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

  // Configure the search auto suggest component
  const inputProps = {
    placeholder: 'Type the name of the company stock',
    value,
    onChange,
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
};

const mapStateToProps = state => (
  {
    stocks: state.stocks,
  }
);

// const mapDispatchToProps = dispatch => ({
//   getStocks: (query, limit = 15) => {
//     dispatch(fetchMockStocks(query, limit));
//   },
// });

const connectedSearch = connect(mapStateToProps)(Search);

export default connectedSearch;
