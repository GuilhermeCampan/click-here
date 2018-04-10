import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../../common';
import './DontClickStage.css';

const DontClickStage = ({ nextStage, previousStage }) => (
  <div className="dont-click-stage">
    <ClickHere handleClick={previousStage()} buttonText='Dont Click Here!' />
    <ClickHere handleClick={nextStage()} />
  </div>
);

DontClickStage.propTypes = {
  nextStage: PropTypes.func,
  previousStage: PropTypes.func
};

export default DontClickStage;
