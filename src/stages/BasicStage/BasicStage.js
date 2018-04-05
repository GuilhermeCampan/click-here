import React from "react";
import ClickHere from "./ClickHere";

export default class BasicStage extends React.Component {
  render() {
    return (
      <div>
        <ClickHere handleClick={this.props.completeStage()} />
      </div>
    );
  }
}
