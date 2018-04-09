import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../common';
import './VerticalStage.css';

const VerticalStage = ({ completeStage }) => (
  <div className="vertical-travelling-wrapper">
    <ClickHere handleClick={completeStage()} />
  </div>
);

VerticalStage.propTypes = {
  completeStage: PropTypes.func
};

export default VerticalStage;
