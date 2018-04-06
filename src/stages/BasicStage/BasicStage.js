import React from "react";
import { ClickHere } from "../common";

export default class BasicStage extends React.Component {
  render() {
    return (
      <div>
        <ClickHere handleClick={this.props.completeStage()} />
      </div>
    );
  }
}