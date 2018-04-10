import React from 'react';
import { Title } from './common';
import { getStagesList } from './stagesList';

export default class Stages extends React.Component {
  constructor(props) {
    super(props);
    this.stageControls = {
      restartGame: () => this.restartGame,
      nextStage: () => this.nextStage,
      previousStage: () => this.previousStage
    };
    this.stages = [];
    this.state = {
      stageIndex: 1
    };
  }

  componentWillMount(){
    this.stages = getStagesList(this.stageControls);
  }

  getCurrentStage = () => {
    return this.stages[this.state.stageIndex];
  };

  nextStage = () => {
    const increseModifier = 1;
    this.changeStageIndex(increseModifier);
  };

  previousStage = () => {
    const decreseModifer = -1;
    this.changeStageIndex(decreseModifer);
  };

  restartGame = () => {
    this.setState({stageIndex: 1});
  };

  changeStageIndex(modifer) {
    this.setState(prevState => {
      return {
        stageIndex: this.getNewStageIndex(prevState.stageIndex + modifer)
      };
    });
  }

  getNewStageIndex = newStageIndex => {
    const defaultStageIndex = 0;
    return newStageIndex >= this.stages.length || newStageIndex < defaultStageIndex
      ? defaultStageIndex
      : newStageIndex;
  };

  render() {
    const stageTitle = `Stage: ${this.state.stageIndex}`;
    const currentStage = this.getCurrentStage();
    return (
      <div>
        <Title text={stageTitle} />
        {currentStage}
      </div>
    );
  }
}
