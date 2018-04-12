import React from 'react';
import { shallow } from 'enzyme';
import ClickHere from './ClickHere';
import { expect } from 'chai';

describe('<ClickHere>', () => {
  it('should call handleClick', () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    const wrapper = shallow(<ClickHere handleClick={handleClick} />);
    wrapper.find('button').simulate('click');
    expect(clicked).equal(true);
  });

  it('should have provided a default text', () => {
    let props = {
      handleClick: fn => fn
    };
    const wrapper = shallow(<ClickHere {...props} />);
    expect(wrapper.text()).to.equal('Click Here!');
  });

  it('should had render the text provided', () => {
    let props = {
      handleClick: fn => fn,
      buttonText: 'something'
    };
    const wrapper = shallow(<ClickHere {...props} />);
    expect(wrapper.text()).to.equal(props.buttonText);
  });

  it('should had render a disabled button', () => {
    let props = {
      handleClick: fn => fn,
      classModifiers: {
        disabled: true
      }
    };
    const wrapper = shallow(<ClickHere {...props} />);
    expect(wrapper.hasClass('click-here-button--disabled')).equal(true);
  });
});
