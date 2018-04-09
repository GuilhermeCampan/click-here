import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MultipleClickStage from './MultipleClickStage';

describe('<MultipleClickStage>', () => {
  let wrapper;
  let mockProps = {
    nextStage: fn => fn,
    previousStage: fn => fn
  };

  beforeEach(() => {
    wrapper = shallow(<MultipleClickStage {...mockProps} />);
  });

  it('should has two ClickHere', () => {
    const quantyOfClickHere = 12;
    expect(wrapper.find('ClickHere').length).equal(quantyOfClickHere);
  });

});
