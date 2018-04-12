import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MobileBackgroundStage from './MobileBackgroundStage';
import sinon from 'sinon';

describe('<MobileBackgroundStage>', () => {
  let nextStageSpy = sinon.spy();
  let wrapper;
  let wrapperInstance;
  let mockProps = {
    nextStage: nextStageSpy
  };

  beforeEach(() => {
    wrapper = shallow(<MobileBackgroundStage {...mockProps} />);
    wrapperInstance = wrapper.instance();
  });

  it('should intialized the tick', () => {
    expect(wrapperInstance.tick).to.not.be.null;
  });

  it('should return true when a box is overlaping', () => {
    const boxA = {
      x: 5,
      width: 100
    };

    const boxB = {
      x: 5,
      width: 100
    };

    const result = wrapperInstance.isOverlaping(boxA, boxB);
    expect(result).equal(true);
  });

  it('should return false when a box is not overlaping', () => {
    const boxA = {
      x: 10,
      width: 100
    };

    const boxB = {
      x: 100,
      width: 100
    };

    const result = wrapperInstance.isOverlaping(boxA, boxB);
    expect(result).equal(false);
  });

  it('should not call nextStage while is not overlaping', () => {
    wrapperInstance.setState({overlaping: false});
    wrapperInstance.handleClick();
    expect(nextStageSpy).to.have.property('callCount', 0);
  });

  it('should call nextStage while is overlaping', () => {
    wrapperInstance.setState({overlaping: true});
    wrapperInstance.handleClick();
    expect(nextStageSpy).to.have.property('callCount', 1);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
