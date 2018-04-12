import React from 'react';
import GameOver from './GameOver/GameOver';
import BasicStage from './BasicStage/BasicStage';
import VerticalStage from './VerticalStage/VerticalStage';
import HorizontalStage from './HorizontalStage/HorizontalStage';
import DontClickStage from './DontClickStage/DontClickStage';
import MultipleClickStage from './MultipleClickStage/MultipleClickStage';
import MobileBackgroundStage
  from './MobileBackgroundStage/MobileBackgroundStage';
import EndGame from './EndGame/EndGame';

const getStagesList = (stageControls) => [
  <GameOver key="gameOver" {...stageControls} />,
  <BasicStage key="stage1" {...stageControls} />,
  <VerticalStage key="stage2" {...stageControls} />,
  <HorizontalStage key="stage3" {...stageControls} />,
  <DontClickStage key="stage4" {...stageControls} />,
  <MultipleClickStage key="stage5" {...stageControls} />,
  <MobileBackgroundStage key="stage6" {...stageControls} />,
  <EndGame key="endGame" {...stageControls} />
];

export {
  getStagesList,
  GameOver,
  BasicStage,
  VerticalStage,
  HorizontalStage,
  DontClickStage,
  MultipleClickStage,
  MobileBackgroundStage,
  EndGame
};