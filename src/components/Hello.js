import React from "react";

function Hello() {
  //   return (
  //     <div>
  //       <h1>hello world</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { id: "main", className: "container" },
      "hello world",
    ),
  );
}

export default Hello;
