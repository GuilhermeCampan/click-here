import React from "react";
import { shallow } from "enzyme";
import ClickHere from "./ClickHere";

describe("<ClickHere>", () => {
  it("should call handleClick", () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    const wrapper = shallow(<ClickHere handleClick={handleClick} />);
    wrapper.find("button").simulate("click");
    expect(clicked).toEqual(true);
  });
});
