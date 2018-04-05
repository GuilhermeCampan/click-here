import React from "react";
import BasicStage from "./BasicStage";
import VerticalStage from "./VerticalStage";
import HorizontalStage from "./HorizontalStage";
import { Title } from "./common";

export default class Stages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stageIndex: 1
    };
  }

  getStages() {
    return [
      <h1>GAME OVER</h1>,
      <BasicStage completeStage={() => this.nextStage} />,
      <VerticalStage completeStage={() => this.nextStage} />,
      <HorizontalStage completeStage={() => this.nextStage} />
    ];
  }

  getCurrentStage = () => {
    const stages = this.getStages();
    return stages[this.state.stageIndex];
  };

  nextStage = () => {
    this.changeStageIndex(1);
  };

  previousStage = () => {
    this.changeStageIndex(-1);
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
    return newStageIndex >= stages.length || newStageIndex < 0
      ? 0
      : newStageIndex;
  };

  render() {
    const stageTitle = "Stage: " + this.state.stageIndex;
    const currentStage = this.getCurrentStage();
    return (
      <div>
        <Title text={stageTitle} />
        {currentStage}
      </div>
    );
  }
}
