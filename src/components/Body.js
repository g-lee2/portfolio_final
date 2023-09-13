import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import me from "../assets/121422.png";
import { BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoAws, BiLogoJavascript, BiLogoCss3 } from "react-icons/bi";
import { SiMysql, SiSqlite, SiHtml5, SiDotnet, SiCsharp, SiSelenium, SiFirebase, SiAmazons3, SiAwslambda } from "react-icons/si";
import projectOne from "../assets/proj-1.png";
import projectTwo from "../assets/proj-2.png";
import projectThree from "../assets/proj-3.png";
import projectFour from "../assets/proj-4.png";

const Body = () => {
  return (
    <main className='bg-white px-10'>
      <section id="home">
        <div className="text-center p-40">
          <h2 className="text-5xl py-2 text-indigo-300 font-medium">Grace Lee</h2>
          <h3 className="text-2xl py-2">Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">Software Engineer experienced in leveraging C#/.Net, React, React Native, Python, and AWS to build robust and scalable solutions. I have a continuous learning mindset, always ready to explore and adapt to new technologies. Open to relocation and embracing new challenges in diverse tech environments.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-red-100 rounded-full w-80 h-80  mt-20 overflow-hidden">
          <img src={me} layout="fill" objectFit="contain" className="mt-12" />
        </div>
      </section>

      <section id="about">
        <div>
          <h3 className="text-3xl py-1">Skills</h3>
          <div className="shadow-xl p-10 rounded-xl my-10">
            <div className="text-5xl grid grid-cols-3 lg:flex justify-center items-center gap-8 py-3 px-3 text-gray-600">
              <div className="flex justify-center items-center">
                <BiLogoPython />
              </div>
              <div className="flex justify-center items-center">
                <BiLogoJavascript />
              </div>
              <div className="flex justify-center items-center">
                <SiHtml5 />
              </div>
              <div className="flex justify-center items-center">
                <BiLogoCss3 />
              </div>
              <div className="flex justify-center items-center">
                <BiLogoTailwindCss />
              </div>
              <div className="flex justify-center items-center">
                <BiLogoReact />
              </div>
              <div className="flex justify-center items-center">
                <SiCsharp />
              </div>
              <div className="flex justify-center items-center">
                <SiDotnet />
              </div>
              <div className="flex justify-center items-center">
                <SiMysql />
              </div>
              <div className="flex justify-center items-center">
                <SiSqlite />
              </div>
              <div className="flex justify-center items-center">
                <BiLogoAws />
              </div>
              <div className="flex justify-center items-center">
                <SiAmazons3 />
              </div>
              <div className="flex justify-center items-center">
                <SiAwslambda />
              </div>
              <div className="flex justify-center items-center">
                <SiSelenium />
              </div>
              <div className="flex justify-center items-center">
                <SiFirebase />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div>
          <h3 className="text-3xl py-1">Projects</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img width={180} height={180} className="rounded-lg object-cover" src={projectOne} />
            </div>
            <div className="basis-1/3 flex-1">
              <img width={180} height={180} className="rounded-lg object-cover" src={projectTwo} />
            </div>
            <div className="basis-1/3 flex-1">
              <img width={180} height={180} className="rounded-lg object-cover" src={projectThree} />
            </div>
            <div className="basis-1/3 flex-1">
              <img width={180} height={180} className="rounded-lg object-cover" src={projectFour} />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div>
          <h3 className="text-3xl py-1">Contact</h3>
        </div>
      </section>
    </main>
  );
}

export default Body;
