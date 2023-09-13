import React from "react";
import Html from "../assets/html.png";
import Javscript from "../assets/javascript.png";
import Python from "../assets/python.png";
import Aws from "../assets/aws.png";
import Firebase from "../assets/firebase.png";
import MySql from "../assets/mysql.png";
import Tailwind from "../assets/tailwind.png";
import ReactTech from "../assets/react.png";
import Selenium from "../assets/selenium.png";
import CSharp from "../assets/Csharp.png";
import Css from "../assets/css.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#25274D] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#2e9cca]">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Html} alt="Html icon" className="w-20 mx-auto" />
            <p className="my-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Javscript} alt="Javascript icon" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactTech} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Firebase} alt="Firebase icon" className="w-20 mx-auto" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSharp} alt="C# icon" className="w-20 mx-auto" />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Python} alt="Python icon" className="w-20 mx-auto" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={MySql} alt="MySql icon" className="w-20 mx-auto" />
            <p className="my-4">MySql</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Aws} alt="Aws icon" className="w-20 mx-auto" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Selenium} alt="Selenuim icon" className="w-20 mx-auto" />
            <p className="my-4">Selenium</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
