// import React from "react";

// function ChildComp(props) {
//   return (
//     <div>
//       <button onClick={() => props.name("ghata")}>click</button>
//     </div>
//   );
// }

// export default ChildComp;

import React, { Component } from "react";

class ChildComp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.name("kumagffr")}>click</button>
      </div>
    );
  }
}

export default ChildComp;
