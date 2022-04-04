import React, { useState } from "react";

const Counter = function () {
  let [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
  }

  function decreemnt() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decreemnt}>decrement</button>
    </div>
  );
};

export default Counter;