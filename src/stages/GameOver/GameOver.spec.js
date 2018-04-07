import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import GameOver from "./GameOver";

describe("<GameOver>", () => {
  let wrapper;
  let wrapperInstance;
  const mockRestartGame = () => null;

  beforeEach(() => {
    wrapper = shallow(<GameOver restartGame={mockRestartGame} />);
    wrapperInstance = wrapper.instance();
  });

  it("should has ClickHere", () => {
    expect(wrapper.find("ClickHere").length).equal(1);
  });

});
