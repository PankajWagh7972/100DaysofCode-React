import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center text-center font-bold pt-40 lg:text-8xl text-6xl space-y-2">
      <h1 className="text-gray-900 pb-10">
        Responsive Navbar Using <span> Next.js</span> &{" "}
        <span className="text-blue-400"> Tailwad CSS</span>
      </h1>
      <div className="flex justify-center items-center cursor-pointer hover:shadow-lg text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16 ">
        <h1 className="text-center">Let's start 🚀</h1>
      </div>
    </div>
  );
};

export default HeroSection;
