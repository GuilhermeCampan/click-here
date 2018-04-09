import React from 'react';
import PropTypes from 'prop-types';

const ClickHere = ({ handleClick }) => (
  <button className="click-here-button" onClick={handleClick}>
    Click Here!
  </button>
);

ClickHere.propTypes = {
  handleClick: PropTypes.func
};

export default ClickHere;
