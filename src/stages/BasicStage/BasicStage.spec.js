import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import BasicStage from "./BasicStage";

describe("<BasicStage>", () => {
  let wrapper;
  let wrapperInstance;
  const mockCompleteStage = () => null;

  beforeEach(() => {
    wrapper = shallow(<BasicStage completeStage={mockCompleteStage} />);
    wrapperInstance = wrapper.instance();
  });

  it("should has ClickHere", () => {
    expect(wrapper.find("ClickHere").length).equal(1);
  });

});
