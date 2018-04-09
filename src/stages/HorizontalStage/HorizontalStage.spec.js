import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HorizontalStage from './HorizontalStage';

describe('<HorizontalStage>', () => {
  let wrapper;
  let mockProps = {
    nextStage: fn => fn
  };

  beforeEach(() => {
    wrapper = shallow(<HorizontalStage {...mockProps} />);
  });

  it('should has ClickHere', () => {
    expect(!!wrapper.find('ClickHere').length).equal(true);
  });

});
