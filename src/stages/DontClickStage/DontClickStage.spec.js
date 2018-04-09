import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DontClickStage from './DontClickStage';

describe('<DontClickStage>', () => {
  let wrapper;
  let mockProps = {
    nextStage: fn => fn,
    previousStage: fn => fn
  };

  beforeEach(() => {
    wrapper = shallow(<DontClickStage {...mockProps} />);
  });

  it('should has two ClickHere', () => {
    const quantyOfClickHere = 2;
    expect(wrapper.find('ClickHere').length).equal(quantyOfClickHere);
  });

});
