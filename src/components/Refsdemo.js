import React, { Component } from "react";

export class Refsdemo extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }
  componentDidMount() {
    this.input.current.focus();
    console.log(this.input);
  }

  handler = () => {
    alert(this.input.current.value);
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" ref={this.input} />
          <button onClick={this.handler}>click</button>
        </form>
      </div>
    );
  }
}

export default Refsdemo;
