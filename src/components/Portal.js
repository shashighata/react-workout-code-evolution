import React from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <div>react portal</div>,
    document.getElementById("root-portal"),
  );
}

export default Portal;
