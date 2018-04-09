import React from 'react';
import PropTypes from 'prop-types';

const ClickHere = ({ handleClick, buttonText }) => (
  <button className="click-here-button" onClick={handleClick}>
    {buttonText}
  </button>
);

ClickHere.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string
};

ClickHere.defaultProps = {
  buttonText: 'Click Here!'
};

export default ClickHere;
