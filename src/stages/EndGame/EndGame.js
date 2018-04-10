import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere, Title } from '../common';

const EndGame = ({ restartGame }) => (
  <div>
    <Title text="Congratulations! You beat the game!"/>
    <ClickHere handleClick={restartGame()} buttonText="Restart!"/>
  </div>
);

EndGame.propTypes = {
  restartGame: PropTypes.func
};

export default EndGame;
