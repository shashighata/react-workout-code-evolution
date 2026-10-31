import React, { Component } from "react";
import ComponentB from "./ComponentB";

export class ComponentA extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("constructor A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getderived A");
    return null;
  }

  render() {
    console.log("render A");
    return (
      <div>
        <h1>ComponentA</h1>
        <ComponentB />
      </div>
    );
  }
  componentDidMount() {
    console.log("mounted A");
  }
}

export default ComponentA;
