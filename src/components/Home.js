import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#25274D] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#2e9cca] font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#b6c5f2]">Grace Lee</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#e2e7fa]">I'm a Software Developer</h2>
        <p className="text-[#8892b0] py-4 max-w=[700px]">
          Passionate software developer committed to delivering effective solutions and continuously refining my skills to address complex challenges.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500} className="text-white border-2 rounded-md px-6 py-3 my-2 flex items-center justify-center hover:bg-[#2e9cca] hover:border-[#2e9cca] w-48 cursor-pointer">View Projects <HiArrowNarrowRight className="ml-3" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
