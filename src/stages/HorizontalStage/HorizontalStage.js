import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../common';
import './HorizontalStage.css';

const HorizontalStage = ({ nextStage }) => (
  <div className="horizontal-travelling-wrapper">
    <ClickHere handleClick={nextStage()} />
  </div>
);

HorizontalStage.propTypes = {
  nextStage: PropTypes.func
};

export default HorizontalStage;