import React, { Component } from "react";
import FIref from "./FIref";

export class FIParentRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  handle = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FIref ref={this.inputRef} />
        <button onClick={this.handle}>click</button>
      </div>
    );
  }
}

export default FIParentRef;
