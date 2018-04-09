import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GameOver from './GameOver';

describe('<GameOver>', () => {
  let wrapper;
  let mockProps = {
    restartGame: fn => fn
  };

  beforeEach(() => {
    wrapper = shallow(<GameOver {...mockProps} />);
  });

  it('should has ClickHere', () => {
    expect(!!wrapper.find('ClickHere').length).equal(true);
  });

});
