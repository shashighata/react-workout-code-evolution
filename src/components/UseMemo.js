import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);

  const [number, setNumber] = useState(5);

  const result = useMemo(() => {
    return number * 3;
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <button onClick={() => setNumber(number + 1)}>Change Number</button>
    </div>
  );
}

export default UseMemo;
