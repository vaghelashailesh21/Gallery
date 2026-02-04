import React from "react";

const Buttons = ({ index, setIndex }) => {
 

  return (
    <div className="flex justify-center items-center p-4 m-3 gap-6">
      <button
        style={{ opacity: index == 1 ? 0.5 : 1 }}
        className="bg-amber-600 px-4 text-sm py-2 cursor-pointer active:scale-95 rounded font-semibold text-black"
        onClick={() => {
        if (index > 1) {
          setIndex(index - 1);
          setUserdata([]);
        }}}>Prev</button>

      <h3>Page {index} </h3>

      <button
        className="bg-amber-600 px-4 py-2 text-sm cursor-pointer active:scale-95 rounded font-semibold text-black"
        onClick={() => {
          setIndex(index + 1);
          setUserdata([]);
        }}>Next</button>

    </div>
  );
};

export default Buttons;
