import React from "react";
import ClickHere from "./ClickHere";
import { Title } from "../common";

export default class BasicStage extends React.Component {
  stageComplete = () => {
    console.log("Stage 1 completed!");
  };

  render() {
    const stageName = "Stage 1";
    return (
      <div>
        <Title text={stageName} />
        <ClickHere stageComplete={this.stageComplete} />
      </div>
    );
  }
}
