import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../common';
import './MultipleClickStage.css';

class MultipleClickStage extends React.Component {
  constructor(props) {
    super(props);
    this.correctButtonIndex;
    this.falseButtonTexts = [
      'click Here!', 'ClicK Here!', 'Click HerE!',
      'CLick Here!', 'Click here!', 'Click Here',
      'ClIck Here!', 'Click HEre!', 'Click There!',
      'CliCk Here!', 'Click HeRe!', 'Click Heer!'
    ];
    this.state = {
      buttonsDisabled: []
    };
  }

  componentWillMount() {
    this.setCorrentButtonIndex();
   }

  setCorrentButtonIndex() {
    this.correctButtonIndex = this.getRamdomIndex();
  }

  getRamdomIndex = () => Math.floor(
    Math.random() * this.falseButtonTexts.length
  );

  getButtonsList() {
    let buttonsList = this.getFalseButtons();
    buttonsList[this.correctButtonIndex] = this.getCorrectButton();
    return buttonsList;
  }

  getCorrectButton = () =>
    <ClickHere key="correct" handleClick={this.props.nextStage()}/>;

  getFalseButtons = () => this.falseButtonTexts.map((text, index) => {
    const isDisabled = this.state.buttonsDisabled[index];
    const buttonProps = {
      handleClick: () => this.handleFalseButtonClick(index),
      buttonText: text,
      classModifiers: {disabled: isDisabled}
    };

    return <ClickHere key={index} {...buttonProps} />;
    }
  );

  handleFalseButtonClick = (i) => {
    let newButtonsDisabled = this.state.buttonsDisabled.slice();
    newButtonsDisabled[i] = true;
    this.setState({buttonsDisabled: newButtonsDisabled});
  };

  render() {
    const buttons = this.getButtonsList();
    return (
      <div className="multiple-click-stage">
        {buttons}
      </div>
    );
  }
}

MultipleClickStage.propTypes = {
  nextStage: PropTypes.func
};

export default MultipleClickStage;