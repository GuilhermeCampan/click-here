import React from "react";
import { render } from "react-dom";
import Stages from "./stages/Stages";

const appStyle = {
  fontFamily: "sans-serif",
  textAlign: "center",
  color: "white"
};

const App = () => (
  <div style={appStyle}>
    <Stages />
  </div>
);

render(<App />, document.getElementById("root"));
