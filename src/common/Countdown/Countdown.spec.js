import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Countdown from './Countdown';
import sinon from 'sinon';

describe('<Countdown>', () => {
  let onCountdownOver = sinon.spy();
  let wrapper;
  let wrapperInstance;
  let mockProps = {
    timeToBeatGame: 30000, // 30s
    onCountdownOver: onCountdownOver
  };

  beforeEach(() => {
    wrapper = shallow(<Countdown {...mockProps} />);
    wrapperInstance = wrapper.instance();
  });

  it('should had render a timer', () => {
    expect(wrapper.text()).equal('00:30');
  });

  it('should set a value to state.countdown', () => {
    expect(wrapperInstance.state.countdown).to.match(/00:30/);
  });

  it('should intialized the tick', () => {
    expect(wrapperInstance.tick).to.not.be.null;
  });

  it('should get time formated in mm:ss', () => {
    expect(wrapperInstance.getTimeFormated()).equal('00:30');
  });

  it('should get 00:00 if the countdown is over', () => {
    wrapper.setState({countdown:0});
    expect(wrapperInstance.getTimeFormated()).equal('00:00');
  });

  it('should send to parent when the countdown is over', () => {
    wrapperInstance.handleCountdownOver();
    expect(onCountdownOver).to.have.property('callCount', 1);
  });

  it('should had subtract from the countdown', () => {
    expect(wrapperInstance.state.countdown).to.match(/00:30/);
    wrapperInstance.updateTimer();
    expect(wrapperInstance.state.countdown).to.match(/00:29/);
  });

  it('should not descrease countdown beyond 0', () => {
    const mockProps = {
      timeToBeatGame: 0,
      onCountdownOver: fn => fn
    };
    const wrapper = shallow(<Countdown {...mockProps} />);
    const wrapperInstance = wrapper.instance();
    wrapperInstance.updateTimer();
    expect(wrapperInstance.state.countdown).equal(0);
    wrapper.unmount();
  });

  it('should get countdown class', () => {
    const mockProps = {
      timeToBeatGame: 30000,
      onCountdownOver: fn => fn
    };
    const wrapper = shallow(<Countdown {...mockProps} />);
    const wrapperInstance = wrapper.instance();
    expect(wrapperInstance.getClassNames()).equal('countdown');
    wrapper.unmount();
  });

  it('should get countdown--warning class', () => {
    const mockProps = {
      timeToBeatGame: 20000,
      onCountdownOver: fn => fn
    };
    const wrapper = shallow(<Countdown {...mockProps} />);
    const wrapperInstance = wrapper.instance();
    expect(wrapperInstance.getClassNames()).equal(
      'countdown countdown--warning'
    );
    wrapper.unmount();
  });

  it('should get countdown--danger class', () => {
    const mockProps = {
      timeToBeatGame: 10000,
      onCountdownOver: fn => fn
    };
    const wrapper = shallow(<Countdown {...mockProps} />);
    const wrapperInstance = wrapper.instance();
    expect(wrapperInstance.getClassNames()).equal(
      'countdown countdown--danger'
    );
    wrapper.unmount();
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
