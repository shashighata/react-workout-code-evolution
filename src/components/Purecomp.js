import React, { PureComponent } from "react";

export class Purecomp extends PureComponent {
  render() {
    console.log("pure component");
    return <div>Purecomp {this.props.name}</div>;
  }
}

export default Purecomp;
