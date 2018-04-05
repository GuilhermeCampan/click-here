import React from "react";
import ClickHere from "./ClickHere";

export default class BasicStage extends React.Component {
  constructor(props) {
    super(props);
  }

  stageComplete = () => {
    console.log("Stage 1 completed!");
  };

  render() {
    const stageName = "Stage 1";
    return (
      <div>
        <ClickHere handleClick={this.props.completeStage()} />
      </div>
    );
  }
}
