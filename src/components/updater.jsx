import React, { useState } from "react";

function MyComponents() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount((c) => (c = 0));
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counterBtn" onClick={decrement}>
        Decrement
      </button>
      <button className="counterBtn" onClick={reset}>
        Reset
      </button>
      <button className="counterBtn" onClick={increment}>
        Incremenet
      </button>
    </div>
  );
}

export default MyComponents;
