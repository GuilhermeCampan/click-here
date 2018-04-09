import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../common';
import './MultipleClickStage.css';

const handleFalseButtonClick = (i) => {
  console.log(i);
};

const falseButtonTexts = [
  'Click HerE!', 'CLICK HERE!', 'Here Click!',
  'click here!', 'clicK hEre!', 'HeRe Click',
  'clIck here', 'clicK hEre!', 'Click Hair!',
  'Click Heer!', 'Click here!', 'click here!'
];

const getRamdomIndex = () =>
  Math.floor(
    Math.random() * falseButtonTexts.length
  );

const indexCorrectButton = getRamdomIndex();

let falseButtons = falseButtonTexts.map((text, i) =>
  <ClickHere key={i} handleClick={() => handleFalseButtonClick(i)} buttonText={text} />
);

const MultipleClickStage = ({ nextStage }) => {
  falseButtons[indexCorrectButton] = <ClickHere key="correct" handleClick={nextStage()} />;
  return (
    <div className="multiple-click-stage">
      {falseButtons}
    </div>
  );
};

MultipleClickStage.propTypes = {
  nextStage: PropTypes.func
};

export default MultipleClickStage;
