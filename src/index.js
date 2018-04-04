import React from "react";
import { render } from "react-dom";
import { BasicStage } from "./stages";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <BasicStage />
  </div>
);

render(<App />, document.getElementById("root"));
