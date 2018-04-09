import React from 'react';
import GameOver from './GameOver/GameOver';
import BasicStage from './BasicStage/BasicStage';
import VerticalStage from './VerticalStage/VerticalStage';
import HorizontalStage from './HorizontalStage/HorizontalStage';
import DontClickStage from './DontClickStage/DontClickStage';

const getStagesList = (stageControls) => [
  <GameOver key="stage0" {...stageControls} />,
  <BasicStage key="stage1" {...stageControls} />,
  <VerticalStage key="stage2" {...stageControls} />,
  <HorizontalStage key="stage3" {...stageControls} />,
  <DontClickStage key="stage4" {...stageControls} />
];
export default getStagesList;