import React, { Component } from "react";

export class ComponentB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("constructor B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getderived B");
    return null;
  }

  render() {
    console.log("render B");
    return <div>ComponentA</div>;
  }
  componentDidMount() {
    console.log("mounted B");
  }
}

export default ComponentB;
