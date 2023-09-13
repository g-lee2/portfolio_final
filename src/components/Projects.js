import React from "react";
import TomoU from "../assets/tomou.png";
import PigDice from "../assets/pig-dice.png";
import CoffeeShop from "../assets/CoffeeShop.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full py-20 sm:py-0 md:h-screen text-gray-300 bg-[#25274D]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#2e9cca]">Projects</p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${PigDice})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pig Dice | Vanilla Js
              </span>
              <div className="pt-8 text-center">
                <a href="https://g-lee2.github.io/pig-dice-game/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Demo</button>
                </a>
                <a href="https://github.com/g-lee2/pig-dice-game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${TomoU})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TomoU | React Native
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Demo</button>
                </a> */}
                <a href="https://github.com/g-lee2/TomoU">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${CoffeeShop})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coffee Inventory | React
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Demo</button>
                </a> */}
                <a href="https://github.com/g-lee2/inventory-tracker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
