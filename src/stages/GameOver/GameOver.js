import React from "react";
import { ClickHere, Title } from "../common";

export default class GameOver extends React.Component {
  render() {
    return (
      <div>
        <Title text="Game Over"/>
        <ClickHere handleClick={this.props.restartGame()} />
      </div>
    );
  }
}
