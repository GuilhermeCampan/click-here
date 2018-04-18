import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import CatchStage from './CatchStage';
import sinon from 'sinon';
import { Collision } from '../../common';

describe('<CatchStage>', () => {
  let nextStageSpy = sinon.spy();
  let wrapper;
  let wrapperInstance;
  let mockProps = {
    nextStage: nextStageSpy
  };

  let fakeElement = mount(<div>Something</div>);
  sinon.stub(Collision, 'getElement').returns(fakeElement);
  sinon.stub(Collision, 'getComputedTranslateXY').returns([10, 20]);

  beforeEach(() => {
    wrapper = mount(<CatchStage {...mockProps} />);
    wrapperInstance = wrapper.instance();
  });

  it('should have intialized the tick', () => {
    expect(wrapperInstance.tick).to.not.be.null;
  });

  it('should return the Coin element', () => {
    expect(wrapperInstance.getCoin()).equal(fakeElement);
  });

  it('should return the Hand element', () => {
    expect(wrapperInstance.getHand()).equal(fakeElement);
  });

  it('should not have called closeHand if it is closed', () => {
    let spy = sinon.spy(wrapperInstance, 'closeHand');
    wrapperInstance.setState({handClosed: true});
    wrapperInstance.handleClick();
    expect(spy.called).equal(false);
  });

  it('should called closeHand', () => {
    let spy = sinon.spy(wrapperInstance, 'closeHand');
    wrapperInstance.handleClick();
    expect(spy.called).equal(true);
  });

  it('should close the hand', () => {
    wrapperInstance.closeHand();
    expect(wrapperInstance.state.handClosed).equal(true);
  });

  it('should set the coin was caught if it is overlaping the hand', () => {
    sinon.stub(wrapperInstance, 'stopCoinAnimation').returns(true);
    wrapperInstance.setState({overlaping: true});
    wrapperInstance.closeHand();
    expect(wrapperInstance.state.caughtCoin).equal(true);
  });

  it('should get the class of Coin element when is not caught', () => {
    wrapperInstance.setState({caughtCoin: false});
    expect(wrapperInstance.getCoinClass()).equal('catch-stage__game__coin');
  });

  it('should get the class of Coin element when it is caught', () => {
    wrapperInstance.setState({caughtCoin: true});
    expect(wrapperInstance.getCoinClass()).equal(
      'catch-stage__game__coin catch-stage__game__coin--caught'
    );
  });

  it('should get the class of Hand element when is not closed', () => {
    wrapperInstance.setState({handClosed: false});
    expect(wrapperInstance.getHandClass()).equal('catch-stage__game__hand');
  });

  it('should get the class of Hand element when it is closed', () => {
    wrapperInstance.setState({handClosed: true});
    expect(wrapperInstance.getHandClass()).equal(
      'catch-stage__game__hand catch-stage__game__hand--closed'
    );
  });

  it('should enable the button when the hand is not closed', () => {
    wrapperInstance.setState({handClosed: false});
    const isDisabled = wrapperInstance.getButtonProps().classModifiers.disabled;
    expect(isDisabled).equal(false);
  });

  it('should disable the button props when the hand is closed', () => {
    wrapperInstance.setState({handClosed: true});
    const isDisabled = wrapperInstance.getButtonProps().classModifiers.disabled;
    expect(isDisabled).equal(true);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
