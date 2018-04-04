import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("<Title>", () => {
  it("should render the text provided", () => {
    const wrapper = shallow(<Title text="test" />);
    expect(wrapper.text()).toBe("test");
  });
});
