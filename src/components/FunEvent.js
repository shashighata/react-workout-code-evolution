import React from "react";

function FunEvent() {
  function handle() {
    console.log("clicked");
  }
  return (
    <div>
      <button onClick={handle}>click</button>
    </div>
  );
}

export default FunEvent;
