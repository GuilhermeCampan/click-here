import React from 'react';
import GameOver from './GameOver/GameOver';
import BasicStage from './BasicStage/BasicStage';
import VerticalStage from './VerticalStage/VerticalStage';
import HorizontalStage from './HorizontalStage/HorizontalStage';
import { Title } from './common';

export default class Stages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stageIndex: 1
    };
  }

  getStages() {
    const stageControls = {
      restartGame: () => this.restartGame,
      nextStage: () => this.nextStage,
      previousStage: () => this.previousStage
    };

    return [
      <GameOver key="stage0" {...stageControls} />,
      <BasicStage key="stage1" {...stageControls} />,
      <VerticalStage key="stage2" {...stageControls} />,
      <HorizontalStage key="stage3" {...stageControls} />
    ];
  }

  getCurrentStage = () => {
    const stages = this.getStages();
    return stages[this.state.stageIndex];
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
    const stages = this.getStages();
    const defaultStageIndex = 0;
    return newStageIndex >= stages.length || newStageIndex < defaultStageIndex
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
