import React, { Component } from "react";

export class RegularComp extends Component {
  con;
  render() {
    console.log("regular");
    return <div>RegularComp {this.props.name}</div>;
  }
}

export default RegularComp;
