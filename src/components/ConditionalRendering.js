import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin: true,
    };
  }

  render() {
    const { isloggedin } = this.state;

    return isloggedin && <h1>welcome Shashi</h1>;

    // return isloggedin ? <h1>welcome Shashi</h1> : <h1>welcome quest</h1>;

    // let message;
    // if (isloggedin) {
    //   message = <h1>welcome shashi</h1>;
    // } else {
    //   message = <h1>welcome quest</h1>;
    // }
    // return message;
    // if (isloggedin) return <h1>welcome shashi</h1>;
    // else {
    //   return <h1>welcome quest</h1>;
    // }
    // return <div>hello world</div>;
  }
}

export default ConditionalRendering;
