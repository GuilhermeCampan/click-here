import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../../common';
import './DontClickStage.css';

const DontClickStage = ({ nextStage, previousStage }) => {
  const buttons = [
    <ClickHere key="wrong"
      handleClick={previousStage}
      buttonText='Dont Click Here!'
    />,
    <ClickHere key="correct" handleClick={nextStage} />
  ];

  const shuffledButtons = buttons.sort(() => .5 - Math.random());

  return (
    <div className="dont-click-stage">
      {shuffledButtons}
    </div>
  );
};

DontClickStage.propTypes = {
  nextStage: PropTypes.func,
  previousStage: PropTypes.func
};

export default DontClickStage;
