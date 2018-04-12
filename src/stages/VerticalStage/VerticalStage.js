import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../../common';
import './VerticalStage.css';

const VerticalStage = ({ nextStage }) => (
  <div className="vertical-travelling-wrapper">
    <ClickHere handleClick={nextStage()} />
  </div>
);

VerticalStage.propTypes = {
  nextStage: PropTypes.func
};

export default VerticalStage;
