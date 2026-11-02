// import React, { Component } from "react";

// export class ClickCounterTwo extends Component {
//   render() {
//     const { count, incrementHandle } = this.props;
//     return (
//       <button type="button" onClick={incrementHandle}>
//         count {count} times
//       </button>
//     );
//   }
// }

// export default ClickCounterTwo;

import React from "react";

const ClickCounterTwo = ({ count, incrementHandle }) => {
  return (
    <button type="button" onClick={incrementHandle}>
      count {count} times
    </button>
  );
};

export default ClickCounterTwo;
