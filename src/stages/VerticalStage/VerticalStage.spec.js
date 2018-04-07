import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import VerticalStage from "./VerticalStage";

describe("<VerticalStage>", () => {
  let wrapper;
  let wrapperInstance;
  const mockCompleteStage = () => null;

  beforeEach(() => {
    wrapper = shallow(<VerticalStage completeStage={mockCompleteStage} />);
    wrapperInstance = wrapper.instance();
  });

  it("should has ClickHere", () => {
    expect(wrapper.find("ClickHere").length).equal(1);
  });

});
