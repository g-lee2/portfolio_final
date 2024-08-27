import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#25274D] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2e9cca]">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi. I'm Grace, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a software engineer with a passion for languages and technology. When I'm not coding, you'll find me spending quality time with my dog, getting lost in a good book, or trying out new hobbies. I believe in lifelong learning and enjoy exploring new ideas. I love challenging myself with personal projects and continuously learning new skills. I'm always eager to connect with like-minded individuals and continue growing both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
