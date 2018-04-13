import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Title, ClickHere, Countdown }  from '../src/common';

const handleClickAction = action('handleClick');

storiesOf('common', module)
  .add('Title', () => (
    <Title text="Title"/>
  ))
  .add('ClickHere', () => (
    <div>
      <ClickHere handleClick={handleClickAction}/>
      <ClickHere handleClick={handleClickAction} buttonText="buttonText"/>
      <ClickHere
        handleClick={handleClickAction}
        buttonText="disabled"
        classModifiers={{disabled:true}}/>
    </div>
  ))
  .add('Countdown', () => {
    const countdownProps = {
      timeToBeatGame: 30000, // 30s
      onCountdownOver: action('onCountdownOver')
    };
    return <Countdown {...countdownProps}/>;
  });