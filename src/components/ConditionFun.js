import React from "react";

function ConditionFun() {
  //  const { isloggedin } = this.state;
  const isloggedin = false;

  //   return isloggedin && <h1>welcome ghata</h1>;

  //   return isloggedin ? <h1>welcome kumar</h1> : <h1>welcome quest</h1>;

  //   let message;
  //   if (isloggedin) {
  //     message = <h1>welcome shashi</h1>;
  //   } else {
  //     message = <h1>welcome quest</h1>;
  //   }
  //   return message;
  if (isloggedin) {
    return <h1>welcome atlas</h1>;
  } else {
    return <h1>welcome quest</h1>;
  }
  // return <div>hello world</div>;
}

export default ConditionFun;
