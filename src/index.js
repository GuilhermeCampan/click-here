import React from "react";
import { render } from "react-dom";
import Stages from "./stages/Stages";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Stages />
  </div>
);

render(<App />, document.getElementById("root"));
