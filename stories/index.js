import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Title, ClickHere }  from '../src/common';
import Stages from '../src/stages/Stages';
import {
  GameOver,
  BasicStage,
  VerticalStage,
  HorizontalStage,
  DontClickStage,
  MultipleClickStage,
  EndGame
} from '../src/stages/stagesList';

const stageControlsActions = {
  restartGame: () => action('restartGame'),
  previousStage: () => action('previousStage'),
  nextStage: () => action('nextStage')
};

storiesOf('common', module)
  .add('Title', () => (
    <Title text="Title"/>
  ))
  .add('ClickHere', () => (
    <div>
      <ClickHere handleClick={action('handleClick')}/>
      <ClickHere handleClick={action('handleClick')} buttonText="buttonText"/>
      <ClickHere handleClick={action('handleClick')} buttonText="disabled" classModifiers={{disabled:true}}/>
    </div>
  ));

storiesOf('Stages', module)
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
  .add('EndGame', () => (
    <EndGame {...stageControlsActions} />
  ));
