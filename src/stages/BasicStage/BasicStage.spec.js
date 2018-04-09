import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BasicStage from './BasicStage';

describe('<BasicStage>', () => {
  let wrapper;
  let mockProps = {
    nextStage: fn => fn
  };

  beforeEach(() => {
    wrapper = shallow(<BasicStage {...mockProps} />);
  });

  it('should has ClickHere', () => {
    expect(!!wrapper.find('ClickHere').length).equal(true);
  });

});
