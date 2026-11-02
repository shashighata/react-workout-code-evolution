import React, { useState, useCallback } from "react";

function Usecallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Usecallback;
