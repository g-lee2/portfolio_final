import React, { useState } from "react";
import logo from "../assets/121422.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#25274D] text-gray-300">
      <div class="w-12 h-12 flex items-center justify-center rounded-full border-1 border-black bg-[#f7f9fe]">
        <img src={logo} alt="Logo Image" class="w-8" />
      </div>
      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li><Link to="home" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Contact</Link></li>
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="cursor-pointer" /> : <FaTimes className="cursor-pointer" />}
      </div>
      {/* Mobile Menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#25274D] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Home</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Projects</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500} className="font-bold hover:underline hover:underline-offset-8">Contact</Link></li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a href="https://www.linkedin.com/in/gracelee-wa" className="flex justify-between items-center w-full text-gray-300">Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a href="https://github.com/g-lee2" className="flex justify-between items-center w-full text-gray-300">Github <FaGithub size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
