import React from "react";
import LetsLearnChinese from "../assets/letslearnchinese.png";
import SwiftShop from "../assets/swiftshop.png";
import WalletAnalyzer from "../assets/walletanalyzer.png";

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
          <div style={{ backgroundImage: `url(${SwiftShop})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Smart Shopping App | React
              </span>
              <div className="pt-8 text-center">
                <a href="https://tcl-70-smart-shopping-list.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Demo</button>
                </a>
                <a href="https://github.com/g-lee2/tcl-70-smart-shopping-list">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${WalletAnalyzer})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Wallet analyzer | React, Electron
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Demo</button>
                </a> */}
                <a href="https://github.com/g-lee2/wallet-analyzer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${LetsLearnChinese})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Let's Learn Chinese | React Native
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#aaabb8] hover:text-white">Demo</button>
                </a> */}
                <a href="https://github.com/g-lee2/lets-learn-chinese">
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
