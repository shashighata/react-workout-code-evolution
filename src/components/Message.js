import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }
  changeState() {
    this.setState({
      message: "thanks for subscribe",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeState()}>subscribe</button>
      </>
    );
  }
}

export default Message;
