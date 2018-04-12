import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../../common';

const BasicStage = ({ nextStage }) => (
  <div>
    <ClickHere handleClick={nextStage()} />
  </div>
);

BasicStage.propTypes = {
  nextStage: PropTypes.func
};

export default BasicStage;
