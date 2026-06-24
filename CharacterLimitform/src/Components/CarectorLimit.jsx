import React from "react";
import { useState } from "react";

const CarectorLimit = () => {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("Wellcome please Type your Problem");

  const HandleGreeting = () => {
    setMsg(" Thank You For Submiting Problem");

    (setTimeout(() => {
      setMsg("");
    }, 4000),
      setText(""));
  };

  const handleUpdet = (e) => {
    setText(e.target.value);
  };

  return (
    <div className=" flex  flex-col justify-center items-center   w-auto   min-h-auto bg-black text-white rounded-2xl py-10 px-5 my-7 m-5">
      <h1 className=" text-3xl font-bold mb-15  items-center">
        Submit Support Tikets
      </h1>

      <div>{msg}</div>

      <textarea
        onChange={handleUpdet}
        value={text}
        placeholder=" Type your Problems in 100 words..."
        className="border w-70 h-60  rounded-2xl p-2 bg-gray-100 text-black mt-10"
      ></textarea>

      <div className="  flex justify-between gap-5 mt-5 items-center   w-70 rounded-2xl ">
        <div
          className={` text-white  flex-1  border p-2  font-semibold  w-30 mr-5  rounded-2xl  ${text.length > 100 ? "text-red-500 border-red-500" : "text-gray-500"}`}
        >
          {text.length}/100 Charectors
        </div>
        <div className=" flex-1 w-70">
          <button
            hidden={text.length === 0 || text.length > 100}
            onClick={(e) => setMsg(HandleGreeting)}
            className="   px-8 border text-2xl    p-4  rounded-2xl     "
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarectorLimit;
