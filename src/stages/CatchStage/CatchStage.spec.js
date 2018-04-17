import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CatchStage from './CatchStage';
import sinon from 'sinon';

describe('<CatchStage>', () => {
  let nextStageSpy = sinon.spy();
  let wrapper;
  // let wrapperInstance;
  let mockProps = {
    nextStage: nextStageSpy
  };

  beforeEach(() => {
    wrapper = shallow(<CatchStage {...mockProps} />);
    // wrapperInstance = wrapper.instance();
  });

  it('do something...', () =>{
    expect(true).equal(true);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
