import React, { useState } from "react";
import BgChanger from "./Component/Button";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="max-w-full min-h-screen duration-200 flex  flex-col justify-center    "
      style={{ backgroundColor: color }}
    >
      <BgChanger colorName="red" changeColor={setColor} />
      <BgChanger colorName="yellow" changeColor={setColor} />
      <BgChanger colorName="green" changeColor={setColor} />
      <BgChanger colorName="pink" changeColor={setColor} />
    </div>
  );
}

export default App;
