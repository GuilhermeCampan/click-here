import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import VerticalStage from './VerticalStage';

describe('<VerticalStage>', () => {
  let wrapper;
  let mockProps = {
    completeStage: fn => fn
  };

  beforeEach(() => {
    wrapper = mount(<VerticalStage {...mockProps} />);
  });

  it('should has ClickHere', () => {
    expect(!!wrapper.find('ClickHere').length).equal(true);
  });

});
