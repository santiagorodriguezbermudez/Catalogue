import React from 'react';
import PropTypes from 'prop-types';

const renderFilterOptions = options => options.map(option => (
  <option key={`${option}-key`}>
    { option }
  </option>
));

const Filter = ({ onChange, filterOptions }) => (
  <select onChange={onChange}>
    { renderFilterOptions(filterOptions) }
  </select>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filter;
