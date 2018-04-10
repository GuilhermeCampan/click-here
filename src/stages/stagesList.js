import React from 'react';
import GameOver from './GameOver/GameOver';
import BasicStage from './BasicStage/BasicStage';
import VerticalStage from './VerticalStage/VerticalStage';
import HorizontalStage from './HorizontalStage/HorizontalStage';
import DontClickStage from './DontClickStage/DontClickStage';
import MultipleClickStage from './MultipleClickStage/MultipleClickStage';

const getStagesList = (stageControls) => [
  <GameOver key="stage0" {...stageControls} />,
  <BasicStage key="stage1" {...stageControls} />,
  <VerticalStage key="stage2" {...stageControls} />,
  <HorizontalStage key="stage3" {...stageControls} />,
  <DontClickStage key="stage4" {...stageControls} />,
  <MultipleClickStage key="stage5" {...stageControls} />
];

export {
  getStagesList,
  GameOver,
  BasicStage,
  VerticalStage,
  HorizontalStage,
  DontClickStage,
  MultipleClickStage
};