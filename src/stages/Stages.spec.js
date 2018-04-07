import React from "react";
import { shallow } from "enzyme";
import Stages from "./Stages";
import { expect } from 'chai';

describe("<Stages>", () => {
  let wrapper;
  let wrapperInstance;

  beforeEach(() => {
    wrapper = shallow(<Stages />);
    wrapperInstance = wrapper.instance();
  });

  describe("methods", () => {

    it("should get the list of stages", () => {
      expect(wrapperInstance.getStages().length).to.be.at.least(2);
    });

    it("should get the current stage", () => {
      expect(wrapperInstance.getCurrentStage()).to.not.be.null;
    });

    it("should go to the next stage", () => {
      expect(wrapperInstance.state.stageIndex).equal(1);
      wrapperInstance.nextStage();
      expect(wrapperInstance.state.stageIndex).equal(2);
    });

    it("should go to the previous stage", () => {
      expect(wrapperInstance.state.stageIndex).equal(1);
      wrapperInstance.previousStage();
      expect(wrapperInstance.state.stageIndex).equal(0);
    });

    it("should change the stageIndex", () => {
      expect(wrapperInstance.state.stageIndex).equal(1);
      wrapperInstance.changeStageIndex(1);
      expect(wrapperInstance.state.stageIndex).equal(2);
    });

    it("should got to the game over", () => {
      wrapperInstance.changeStageIndex(9999);
      expect(wrapperInstance.state.stageIndex).equal(0);
    });

    it("should restart the game", () => {
      wrapper.setState({ stageIndex: 3 });
      wrapperInstance.restartGame();
      expect(wrapperInstance.state.stageIndex).equal(1);
    });

  });
});
