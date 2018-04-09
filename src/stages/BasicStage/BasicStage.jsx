import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../common';

const BasicStage = ({ completeStage }) => (
  <div>
    <ClickHere handleClick={completeStage()} />
  </div>
);

BasicStage.propTypes = {
  completeStage: PropTypes.func
};

export default BasicStage;
