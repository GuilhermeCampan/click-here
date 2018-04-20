import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import CatchStage from './CatchStage';
import sinon from 'sinon';
// import { Collision } from '../../common';

describe('<CatchStage>', () => {
  let nextStageSpy = sinon.spy();
  let wrapper;
  let wrapperInstance;
  let mockProps = {
    nextStage: nextStageSpy
  };

  beforeEach(() => {
    wrapper = mount(<CatchStage {...mockProps} />);
    wrapperInstance = wrapper.instance();
    wrapperInstance.sprite = global.genericImage;
  });

  it('should have set the tick', () => {
    expect(wrapperInstance.tick).to.not.be.null;
  });

  it('should have set the canvas', () => {
    expect(wrapperInstance.canvas).to.not.be.null;
  });

  it('should have set the sprite', () => {
    expect(wrapperInstance.sprite).to.not.be.null;
  });

  it('should clean canvas', () => {
    let spy = sinon.spy(wrapperInstance.canvas, 'clearRect');
    wrapperInstance.cleanCanvas();
    expect(spy.called).equal(true);
  });

  it('should update update coin position', () => {
    const expetectedY = wrapperInstance.coin.y + wrapperInstance.coin.speed;
    wrapperInstance.updateCoinPosition(1);
    expect(wrapperInstance.coin.y).equal(expetectedY);
  });

  it('should render coin outbound of frame if', () => {
    const expetectedY = -64;
    wrapperInstance.coin.y = 9999;
    wrapperInstance.updateCoinPosition(1);
    expect(wrapperInstance.coin.y).equal(expetectedY);
  });

  it('should render coin outbound of frame if was caught', () => {
    const expetectedY = -64;
    wrapperInstance.setState({
      caughtCoin: true
    });
    wrapperInstance.updateCoinPosition(1);
    expect(wrapperInstance.coin.y).equal(expetectedY);
  });

  it('should check if the coin collided with the hand', () => {
    wrapperInstance.coin.y = wrapperInstance.hand.y;
    wrapperInstance.handleCoinCollision();
    expect(wrapperInstance.state.coinCollided).equal(true);
  });

  it('should call closeHand if hand is not closed', () => {
    let spy = sinon.spy(wrapperInstance, 'closeHand');
    wrapperInstance.setState({
      handClosed: false
    });
    wrapperInstance.handleClick();
    expect(spy.called).equal(true);
  });

  it('should close hand', () => {
    wrapperInstance.setState({
      handClosed: false,
      coinCollided: false
    });
    wrapperInstance.closeHand();
    expect(wrapperInstance.state.handClosed).equal(true);
  });

  it('should cauhth coin if the handClosed and coinCollided are true', () => {
    wrapperInstance.setState({
      handClosed: true,
      coinCollided: true
    });
    wrapperInstance.closeHand();
    expect(wrapperInstance.state.caughtCoin).equal(true);
  });

  it('should open hand', () => {
    wrapperInstance.setState({
      handClosed: true
    });
    wrapperInstance.openHand();
    expect(wrapperInstance.state.handClosed).equal(false);
  });

  it('should disable button if hand is closed', () => {
    wrapperInstance.setState({
      handClosed: true
    });
    const buttonProps = wrapperInstance.getButtonProps();
    expect(buttonProps.classModifiers.disabled).equal(true);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
