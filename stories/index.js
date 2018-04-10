import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Title, ClickHere }  from '../src/stages/common';
import Stages from '../src/stages/Stages';
import {
  BasicStage,
  VerticalStage,
  HorizontalStage,
  DontClickStage,
  MultipleClickStage,
  GameOver
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
  .add('GameOver', () => (
    <GameOver {...stageControlsActions} />
  ));
