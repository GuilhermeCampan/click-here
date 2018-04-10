import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import EndGame from './EndGame';

describe('<EndGame>', () => {
  let wrapper;
  let mockProps = {
    restartGame: fn => fn
  };

  beforeEach(() => {
    wrapper = shallow(<EndGame {...mockProps} />);
  });

  it('should had render a ClickHere', () => {
    expect(wrapper.find('ClickHere').length).equal(1);
  });

  it('should had render a Title', () => {
    expect(wrapper.find('Title').length).equal(1);
  });

});
