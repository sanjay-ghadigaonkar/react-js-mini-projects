import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePlush = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const ResetCount = () => {
    setCount(0);
  };
  return (
    /* Main Container */
    <div
      className="max-w-3xl mx-auto m-4 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
      aria-hidden="true"
    >
      {/* animate-pulse adds the smooth fading effect */}
      <div className="flex flex-col md:flex-row   ">
        {/* Content Skeleton Area */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between w-full items-center">
          <section className="w-full">
            {/* Title Skeleton */}
            <div className="h-8 not-last: rounded-md  text-2xl font-extrabold  w-3/4 mb-4">
              CounterApp
            </div>

            {/* Price Skeleton */}
            <div className="h-10  rounded-md w-1/3 mb-6   items-center">
              Count : {count}
            </div>
          </section>

          {/* Buttons & Counter Skeleton */}
          <section className="flex flex-col h-50 sm:flex-row  md:flex-wrap  items-center  w-full text-center">
            {/* Counter Box Skeleton */}
            <div className="h-12    flex  md:justify-items-start  rounded-lg w-full sm:w-32 gap-5">
              <button
                onClick={handlePlush}
                className="border-2 w-20  h-15   p-5  rounded-xl"
              >
                Plush
              </button>
              <button
                onClick={handleMinus}
                className="border-2 w-20  h-15   p-5 rounded-xl"
              >
                Minus
              </button>
              <button
                onClick={ResetCount}
                className="border-2 w-20  h-15  p-5 rounded-xl "
              >
                Reset
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Counter;
