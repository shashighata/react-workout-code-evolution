// import React, { Component } from "react";

// export class CounterRenderProps extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   incrementHandle = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };
//   render() {
//     return (
//       <div>{this.props.render(this.state.count, this.incrementHandle)}</div>
//     );
//   }
// }

// export default CounterRenderProps;

import React, { useState } from "react";

const CounterRenderProps = ({ render }) => {
  const [count, setCount] = useState(0);
  const incrementHandle = (prevCount) => {
    setCount((prevCount) => prevCount + 1);
  };
  return <div>{render(count, incrementHandle)}</div>;
};

export default CounterRenderProps;
