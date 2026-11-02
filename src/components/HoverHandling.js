import React, { Component } from "react";
import WithCounter from "./WithCounter";

export class HoverHandling extends Component {
  render() {
    const { count, incrementHandle } = this.props;
    return (
      <div>
        <div>count {count} times</div>
        <button onMouseOver={incrementHandle}>hover here</button>
      </div>
    );
  }
}

export default WithCounter(HoverHandling, 6);
