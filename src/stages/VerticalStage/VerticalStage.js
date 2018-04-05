import React from "react";
import { ClickHere } from "../common";
import "./VerticalStage.css";

export default class VerticalStage extends React.Component {
  render() {
    return (
      <div className="vertical-travelling-wrapper">
        <ClickHere handleClick={this.props.completeStage()} />
      </div>
    );
  }
}
