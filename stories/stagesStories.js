import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Stages from '../src/stages/Stages';
import PropTypes from 'prop-types';
import {
  GameOver,
  BasicStage,
  VerticalStage,
  HorizontalStage,
  DontClickStage,
  MultipleClickStage,
  MobileBackgroundStage,
  CatchStage,
  EndGame
} from '../src/stages/stagesList';
import './stories.css';

const stageControlsActions = {
  restartGame: action('restartGame'),
  previousStage: action('previousStage'),
  nextStage: action('nextStage')
};

const FakeContainer = ({children}) => (
  <div className="stages__container limit-box">
    {children}
  </div>
);

FakeContainer.propTypes = {
  children: PropTypes.element
};

storiesOf('Stages', module)
  .add('All stages', () => (
    <Stages />
  ))
  .add('GameOver', () => (
    <FakeContainer> <GameOver {...stageControlsActions}/> </FakeContainer>
  ))
  .add('BasicStage', () => (
    <FakeContainer> <BasicStage {...stageControlsActions}/> </FakeContainer>
  ))
  .add('VerticalStage', () => (
    <FakeContainer> <VerticalStage {...stageControlsActions}/> </FakeContainer>
  ))
  .add('HorizontalStage', () => (
    <FakeContainer> <HorizontalStage {...stageControlsActions}/> </FakeContainer>
  ))
  .add('DontClickStage', () => (
    <FakeContainer> <DontClickStage {...stageControlsActions}/> </FakeContainer>
  ))
  .add('MultipleClickStage', () => (
    <FakeContainer> <MultipleClickStage {...stageControlsActions}/> </FakeContainer>
  ))
  .add('MobileBackgroundStage', () => (
    <FakeContainer> <MobileBackgroundStage {...stageControlsActions}/> </FakeContainer>
  ))
  .add('CatchStage', () => (
    <FakeContainer> <CatchStage {...stageControlsActions}/> </FakeContainer>
  ))
  .add('EndGame', () => (
    <FakeContainer> <EndGame {...stageControlsActions}/> </FakeContainer>
  ));
