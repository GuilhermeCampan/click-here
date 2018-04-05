import React from "react";
import BasicStage from "./BasicStage";
import VerticalStage from "./VerticalStage";
import { Title } from "./common";

export default class Stages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stageIndex: 2
    };
  }

  getStages() {
    return [
      <h1> No stage </h1>,
      <BasicStage completeStage={() => this.nextStage} />,
      <VerticalStage completeStage={() => this.previousStage} />
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
