import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../common';
import './HorizontalStage.css';

const HorizontalStage = ({ completeStage }) => (
  <div className="horizontal-travelling-wrapper">
    <ClickHere handleClick={completeStage()} />
  </div>
);

HorizontalStage.propTypes = {
  completeStage: PropTypes.func
};

export default HorizontalStage;