import React, { useState } from "react";

const BgChanger = ({ colorName, changeColor }) => {
  return (
    <div className=" min-w-full max-h-screen flex justify-center">
      <button
        className=" text-2xl text-black border-white border-2 pr-2 pl-2 rounded-md mt-4 ml-4"
        onClick={() => changeColor(colorName)}
        style={{ backgroundColor: colorName }}
      >
        ChangeColor
      </button>
    </div>
  );
};

export default BgChanger;
