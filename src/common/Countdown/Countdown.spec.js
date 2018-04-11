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
    handleCountdownOver: onCountdownOver
  };

  beforeEach(() => {
    wrapper = shallow(<Countdown {...mockProps} />);
    wrapperInstance = wrapper.instance();
  });

  it('should had render a timer', () => {
    expect(wrapper.text()).equal('00:30');
  });

  it('should set a value to state.countdown', () => {
    expect(wrapperInstance.state.countdown).to.be.ok;
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

  afterEach(() => {
    wrapper.unmount();
  });
});
