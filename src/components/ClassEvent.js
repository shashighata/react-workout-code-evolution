import React, { Component } from "react";

class ClassEvent extends Component {
  handler() {
    console.log("clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handler}>click me</button>
      </div>
    );
  }
}

export default ClassEvent;
