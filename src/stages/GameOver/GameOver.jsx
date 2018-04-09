import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere, Title } from '../common';

const GameOver = ({ restartGame }) => (
  <div>
    <Title text="Game Over"/>
    <ClickHere handleClick={restartGame()} />
  </div>
);

GameOver.propTypes = {
  restartGame: PropTypes.func
};

export default GameOver;
