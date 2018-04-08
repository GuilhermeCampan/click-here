import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Title, ClickHere }  from '../src/stages/common';
import Stages from '../src/stages/Stages';
import BasicStage  from '../src/stages/BasicStage/BasicStage';
import VerticalStage  from '../src/stages/VerticalStage/VerticalStage';
import HorizontalStage  from '../src/stages/HorizontalStage/HorizontalStage';
import GameOver  from '../src/stages/GameOver/GameOver';


storiesOf('common', module)
  .add('Title', () => (
    <Title text="Title"/>
  ))
  .add('ClickHere', () => (
    <ClickHere handleClick={action('clicked')}/>
  ));

storiesOf('Stages', module)
  .add('All stages', () => (
    <Stages />
  ))
  .add('BasicStage', () => (
    <BasicStage completeStage={() => action('clicked')} />
  ))
  .add('VerticalStage', () => (
    <VerticalStage completeStage={() => action('clicked')} />
  ))
  .add('HorizontalStage', () => (
    <HorizontalStage completeStage={() => action('clicked')} />
  ))
  .add('GameOver', () => (
    <GameOver restartGame={() => action('clicked')} />
  ))
