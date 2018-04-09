import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Title, ClickHere }  from '../src/stages/common';
import Stages from '../src/stages/Stages';
import BasicStage  from '../src/stages/BasicStage/BasicStage';
import VerticalStage  from '../src/stages/VerticalStage/VerticalStage';
import HorizontalStage  from '../src/stages/HorizontalStage/HorizontalStage';
import DontClickStage  from '../src/stages/DontClickStage/DontClickStage';
import MultipleClickStage  from '../src/stages/MultipleClickStage/MultipleClickStage';
import GameOver  from '../src/stages/GameOver/GameOver';

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
    <ClickHere handleClick={action('handleClick')}/>
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
