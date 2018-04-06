import React from "react";
import { shallow } from "enzyme";
import Stages from "./Stages";

describe("<Stages>", () => {
  let wrapper;
  let wrapperInstance;

  beforeEach(() => {
    wrapper = shallow(<Stages />);
    wrapperInstance = wrapper.instance();
  });

  it("should get the list of stages", () => {
    expect(wrapperInstance.getStages().length).toEqual(3);
  });

  it("should get the current stage", () => {
    expect(wrapperInstance.getCurrentStage()).not.toBe(null);
  });

  it("should go to the next stage", () => {
    expect(wrapperInstance.state.stageIndex).toEqual(1);
    wrapperInstance.nextStage();
    expect(wrapperInstance.state.stageIndex).toEqual(2);
  });

  it("should go to the previous stage", () => {
    expect(wrapperInstance.state.stageIndex).toEqual(1);
    wrapperInstance.previousStage();
    expect(wrapperInstance.state.stageIndex).toEqual(0);
  });

  it("should change the stageIndex", () => {
    expect(wrapperInstance.state.stageIndex).toEqual(1);
    wrapperInstance.changeStageIndex(1);
    expect(wrapperInstance.state.stageIndex).toEqual(2);
  });
});
