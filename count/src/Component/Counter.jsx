import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);

    if (count === 0) {
      setMsg("Value is Already Reset"); //user bar bar reset dabaye to masg dikhega
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  }

  return (
    <div>
      <header>CounterApp</header>
      <div>
        <h4>{msg}</h4>
      </div>

      <h1>Count : {count}</h1>
      <div>
        <button onClick={handleReset}>reset:</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>decreament</button>
      </div>
    </div>
  );
};

export default Counter;
