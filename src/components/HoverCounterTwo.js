// import React, { Component } from "react";

// export class HoverCounterTwo extends Component {
//   render() {
//     const { count, incrementHandle } = this.props;
//     return (
//       <button type="button" onMouseOver={incrementHandle}>
//         count {count} times
//       </button>
//     );
//   }
// }

// export default HoverCounterTwo;
import React from "react";

const HoverCounterTwo = ({ count, incrementHandle }) => {
  return (
    <button type="button" onMouseOver={incrementHandle}>
      count {count} times
    </button>
  );
};

export default HoverCounterTwo;
