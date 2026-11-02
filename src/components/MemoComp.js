import React from "react";

function MemoComp({ name }) {
  console.log("memo component");
  return (
    <div>
      <h1>memo comp {name}</h1>
    </div>
  );
}

export default React.memo(MemoComp);
