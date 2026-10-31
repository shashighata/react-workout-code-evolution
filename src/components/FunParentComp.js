import React from "react";
import ChildComp from "./ChildComp";

function FunParentComp() {
  const clickparent = (child) => alert(`call parent from ${child}`);
  return (
    <div>
      <ChildComp name={clickparent} />
    </div>
  );
}

export default FunParentComp;
