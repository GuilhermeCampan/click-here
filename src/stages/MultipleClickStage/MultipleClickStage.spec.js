import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MultipleClickStage from './MultipleClickStage';

describe('<MultipleClickStage>', () => {
  let wrapper;
  let wrapperInstance;
  let mockProps = {
    nextStage: fn => fn,
    previousStage: fn => fn
  };

  beforeEach(() => {
    wrapper = shallow(<MultipleClickStage {...mockProps} />);
    wrapperInstance = wrapper.instance();
  });

  it('should have intanced the correct button index', () => {
    expect(wrapper.correctButtonIndex).to.be.undefined;
    expect(wrapperInstance.correctButtonIndex).to.be.at.least(0);
  });

  it('should have intanced a list of false texts', () => {
    expect(wrapperInstance.falseButtonTexts.length).equal(12);
  });

  it('should have provided the default state of disabled buttons', () => {
    expect(wrapperInstance.state.buttonsDisabled).to.be.an('array');
  });

  it('should return the index of correct button', () => {
    const quantyOfButtons = wrapperInstance.falseButtonTexts.length;
    const correctButtonIndex = wrapperInstance.getRamdomIndex();
    expect(correctButtonIndex).to.be.at.least(0);
    expect(correctButtonIndex).to.be.at.below(quantyOfButtons);
  });

  it('should get a list of buttons', () => {
    const buttons = wrapperInstance.getButtonsList();
    expect(buttons.length).to.be.at.least(0);
  });

  it('should get the correct button', () => {
    const correctButton = shallow(
      <span>{wrapperInstance.getCorrectButton()}</span>
    );
    expect(correctButton.find('ClickHere').length).equal(1);
  });

  it('should have disabled buttons', () => {
    // it's necessary set at least twi disabled buttons,
    // because the correct button is radom
    const newsButtonsDisabledState = [true, true];
    wrapperInstance.setState({buttonsDisabled: newsButtonsDisabledState});
    const buttons = wrapperInstance.getFalseButtons();
    const disabledButtons = buttons.filter(node =>
      node.props.classModifiers.disabled
    );
    expect(disabledButtons.length).to.be.at.least(1);
  });

  it('should return several ClickHere', () => {
    const buttons = shallow(<div>{wrapperInstance.getButtonsList()}</div>);
    const quantyOfButtons = wrapperInstance.falseButtonTexts.length;
    expect(buttons.find('ClickHere').length).equal(quantyOfButtons);
  });

  it('should has a single correct button', () => {
    const buttons = shallow(<div>{wrapperInstance.getButtonsList()}</div>);
    const hasCorrectButon = buttons.findWhere(node => node.key() === 'correct');
    expect(hasCorrectButon.length).equal(1);
  });

  it('should disable button if it is a incorrect one', () => {
    wrapperInstance.handleFalseButtonClick(0);
    expect(wrapperInstance.state.buttonsDisabled[0]).equal(true);
  });

});
