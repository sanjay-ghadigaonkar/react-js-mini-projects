import React, { useState } from "react";
import "./TextCounter.css";

const TextCounter = () => {
  const [count, setCount] = useState(0);

  const halndleInput = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <div>
      <header id="header">CounterApp</header>
      <div>
        <textarea
          id="teaxtEra"
          onChange={(e) => setCount(e.target.value.length)}
          name="type feedback "
        ></textarea>
      </div>

      <h1>Count : {count}</h1>
    </div>
  );
};

export default TextCounter;
