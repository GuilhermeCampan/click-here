import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Stages from '../src/stages/Stages';
import {
  GameOver,
  BasicStage,
  VerticalStage,
  HorizontalStage,
  DontClickStage,
  MultipleClickStage,
  MobileBackgroundStage,
  EndGame
} from '../src/stages/stagesList';
import './commonStories';

const stageControlsActions = {
  restartGame: action('restartGame'),
  previousStage: action('previousStage'),
  nextStage: action('nextStage')
};

storiesOf('Stages 2', module)
  .add('All stages', () => (
    <Stages />
  ))
  .add('GameOver', () => (
    <GameOver {...stageControlsActions} />
  ))
  .add('BasicStage', () => (
    <BasicStage {...stageControlsActions} />
  ))
  .add('VerticalStage', () => (
    <VerticalStage {...stageControlsActions}/>
  ))
  .add('HorizontalStage', () => (
    <HorizontalStage {...stageControlsActions}/>
  ))
  .add('DontClickStage', () => (
    <DontClickStage {...stageControlsActions}/>
  ))
  .add('MultipleClickStage', () => (
    <MultipleClickStage {...stageControlsActions}/>
  ))
  .add('MobileBackgroundStage', () => (
    <MobileBackgroundStage {...stageControlsActions}/>
  ))
  .add('EndGame', () => (
    <EndGame {...stageControlsActions} />
  ));
