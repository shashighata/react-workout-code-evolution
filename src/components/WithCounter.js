import React, { Component } from "react";

const WithCounter = (WrapperComponent, incrementNumber) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementHandle = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    };
    render() {
      return (
        <>
          {/* <h2>hello world</h2> */}
          <WrapperComponent
            count={this.state.count}
            incrementHandle={this.incrementHandle}
            {...this.props}
          />
          ;
        </>
      );
    }
  }
  return NewComponent;
};

export default WithCounter;
