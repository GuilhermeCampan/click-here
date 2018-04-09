import React from 'react';
import { shallow } from 'enzyme';
import Stages from './Stages';
import { expect } from 'chai';

describe('<Stages>', () => {
  let wrapper;
  let wrapperInstance;

  beforeEach(() => {
    wrapper = shallow(<Stages />);
    wrapperInstance = wrapper.instance();
  });

  it('should get the list of stages', () => {
    const minimumNumberStages = 2;
    expect(wrapperInstance.getStages().length).to.be.at.least(
      minimumNumberStages
    );
  });

  it('should get the current stage', () => {
    expect(wrapperInstance.getCurrentStage()).to.not.be.null;
  });

  it('should go to the next stage', () => {
    const initialStageIndex = 1;
    const expectedStageIndex = 2;
    expect(wrapperInstance.state.stageIndex).equal(initialStageIndex);
    wrapperInstance.nextStage();
    expect(wrapperInstance.state.stageIndex).equal(expectedStageIndex);
  });

  it('should go to the previous stage', () => {
    const initialStageIndex = 1;
    const expectedStageIndex = 0;
    expect(wrapperInstance.state.stageIndex).equal(initialStageIndex);
    wrapperInstance.previousStage();
    expect(wrapperInstance.state.stageIndex).equal(expectedStageIndex);
  });

  it('should change the stageIndex', () => {
    const initialStageIndex = 1;
    const stageModifer = 1;
    const expectedStageIndex = 2;
    expect(wrapperInstance.state.stageIndex).equal(initialStageIndex);
    wrapperInstance.changeStageIndex(stageModifer);
    expect(wrapperInstance.state.stageIndex).equal(expectedStageIndex);
  });

  it('should got to the game over', () => {
    const stageModifer = 1;
    const expectedStageIndex = 2;
    wrapperInstance.changeStageIndex(stageModifer);
    expect(wrapperInstance.state.stageIndex).equal(expectedStageIndex);
  });

  it('should restart the game', () => {
    const expectedStageIndex = 1;
    wrapper.setState({ stageIndex: 3 });
    wrapperInstance.restartGame();
    expect(wrapperInstance.state.stageIndex).equal(expectedStageIndex);
  });
});
