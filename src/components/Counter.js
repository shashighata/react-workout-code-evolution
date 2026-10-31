import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback", this.state.count);
    //   },
    // );
    // console.log("test", this.state.count);
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("callback", this.state.count);
      },
    );
  }

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <div>count - {count}</div>
        <button onClick={this.incrementFive}>increment</button>
      </>
    );
  }
}

export default Counter;
