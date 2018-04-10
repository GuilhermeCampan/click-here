import React from 'react';
import PropTypes from 'prop-types';
import { ClickHere } from '../common';
import './MultipleClickStage.css';

class MultipleClickStage extends React.Component {
  constructor(props) {
    super(props);
    this.correctButtonIndex = 0;
    this.falseButtonTexts = [
      'Click HerE!', 'CLICK HERE!', 'Here Click!',
      'click here!', 'clicK hEre!', 'HeRe Click',
      'clIck here', 'clicK hEre!', 'Click Hair!',
      'Click Heer!', 'Click here!', 'click here!'
    ];
    this.buttonsList = [];
    this.state = {
      buttonsDisabled: []
    };
  }

  componentWillMount() {
    this.setCorrentButtonIndex();
    this.setButtonsList();
   }

  setCorrentButtonIndex() {
    this.correctButtonIndex = this.getRamdomIndex();
  }

  setButtonsList() {
    this.buttonsList = this.getFalseButtons();
    this.buttonsList[this.correctButtonIndex] =
      <ClickHere key="correct" handleClick={this.props.nextStage()} />;
  }

  getRamdomIndex = () => Math.floor(
    Math.random() * this.falseButtonTexts.length
  );

  getFalseButtons = () => this.falseButtonTexts.map((text, i) => {
    const buttonProps = {
      handleClick: () => this.handleFalseButtonClick(i),
      buttonText: text
    };
    return <ClickHere key={i} {...buttonProps} />;
    }
  );

  handleFalseButtonClick = (i) => {
    let newButtonsDisabled = this.state.buttonsDisabled.slice();
    newButtonsDisabled[i] = true;
    this.setState({buttonsDisabled: newButtonsDisabled});
  };

  render() {
    const disabledButtons = this.buttonsList.map((button, index) => {
      const disabledButtonProps = {
        handleClick: () => this.handleFalseButtonClick(index),
        buttonText: this.falseButtonTexts[index],
        classModifiers: {disabled: true}
      };
      const isEnabled = index== this.correctButtonIndex || !this.state.buttonsDisabled[index];
      return isEnabled
        ? button
        : <ClickHere key={index} {...disabledButtonProps} />;
    });

    return (
      <div className="multiple-click-stage">
        {disabledButtons}
      </div>
    );
  }
}

MultipleClickStage.propTypes = {
  nextStage: PropTypes.func
};

export default MultipleClickStage;