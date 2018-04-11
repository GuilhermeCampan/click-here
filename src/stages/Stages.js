import React from 'react';
import { Title, Countdown } from '../common';
import { getStagesList } from './stagesList';
import './Stages.css';

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

  componentWillMount() {
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
    this.setState({ stageIndex: 1 });
  };

  goToGameOver = () => {
    this.setState({ stageIndex: 0 });
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
    const useDefaultStage =
      newStageIndex >= this.stages.length || newStageIndex < defaultStageIndex;

    return useDefaultStage ? defaultStageIndex : newStageIndex;
  };

  getTitle() {
    if (!this.isPlaybleStage()) {
      return;
    }
    const stageTitle = `Stage: ${this.state.stageIndex}`;
    return <Title text={stageTitle} />;
  }

  isPlaybleStage() {
    const firstStageIndex = 0;
    const currentStageIndex = this.state.stageIndex;
    const lastStageIndex = getStagesList().length - 1;
    return currentStageIndex > firstStageIndex
      && currentStageIndex !== lastStageIndex;
  }

  getCountdown() {
    if (!this.isPlaybleStage()) {
      return;
    }
    const averageTimePerStage = 6000; // 6s
    const playbleStages = getStagesList().length - 2;
    const avaibleTimeToBeatGame = playbleStages * averageTimePerStage;
    const CountdownSettings = {
      timeToBeatGame: avaibleTimeToBeatGame,
      onCountdownOver: () => this.goToGameOver()
    };
    return <Countdown {...CountdownSettings}/>;
  }

  render() {
    const currentStage = this.getCurrentStage();
    return (
      <div className="stages">
        <div className="stages__header">
          {this.getTitle()}
        </div>
        <div className="stages__container">
          {currentStage}
        </div>
        <div className="stages__footer">
          {this.getCountdown()}
        </div>
      </div>
    );
  }
}
