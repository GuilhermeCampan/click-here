import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import HorizontalStage from "./HorizontalStage";

describe("<HorizontalStage>", () => {
  let wrapper;
  let wrapperInstance;
  const mockCompleteStage = () => null;

  beforeEach(() => {
    wrapper = shallow(<HorizontalStage completeStage={mockCompleteStage} />);
    wrapperInstance = wrapper.instance();
  });

  it("should has ClickHere", () => {
    expect(wrapper.find("ClickHere").length).equal(1);
  });

});
