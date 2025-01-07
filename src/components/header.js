import React from "react";

export const Header = () => {
  return (
    <header className="px-5 pt-2 pb-0">
      <div className="flex justify-between">
        <h1 className="text-5xl font-anton inline">
          News <span className="text-white text-stroke-black">Now</span>
        </h1>
        <button className="btn btn-primary">Rohit</button>
      </div>
    </header>
  );
};
