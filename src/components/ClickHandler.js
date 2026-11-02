import React, { Component } from "react";
import WithCounter from "./WithCounter";

export class ClickHandler extends Component {
  render() {
    const { count, incrementHandle } = this.props;
    return (
      <div>
        <div>
          {this.props.name}count {count} times
        </div>
        <button onClick={incrementHandle}>click here</button>
      </div>
    );
  }
}

export default WithCounter(ClickHandler, 4);
