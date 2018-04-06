import React from "react";
import { ClickHere } from "../common";
import "./HorizontalStage.css";

export default class HorizontalStage extends React.Component {
  render() {
    return (
      <div className="horizontal-travelling-wrapper">
        <ClickHere handleClick={this.props.completeStage()} />
      </div>
    );
  }
}
