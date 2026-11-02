import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComp";
import Purecomp from "./Purecomp";
import MemoComp from "./MemoComp";

export class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "shahsi",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "shashi",
      });
    }, 2000);
  }
  render() {
    console.log("parent component");
    return (
      <div>
        parent components
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name} /> */}
        {/* <Purecomp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComponent;
