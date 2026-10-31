import React, { useState } from "react";

function CounterFun() {
  const [count, setCount] = useState(0);
  console.log(useState());
  const increment = (prevState) => {
    setCount((prevState) => prevState + 1);
  };

  function incrementFive() {
    increment();
    increment();
    increment();
    increment();
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementFive}>increment</button>
    </div>
  );
}

export default CounterFun;
