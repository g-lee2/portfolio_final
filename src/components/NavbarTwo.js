import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const NavbarTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white z-50'>
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div>Grace Lee</div>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex'>
            <li>
              <a className='ml-10 uppercase hover:border-b text-xl' href='#about'>About</a>
            </li>
            <li>
              <a className='ml-10 uppercase hover:border-b text-xl' href='#projects'>Projects</a>
            </li>
            <li>
              <a className='ml-10 uppercase hover:border-b text-xl' href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <FiMenu size={25} />
        </div>
      </div>
      <div className={isOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <FiX size={25} />
          </div>
        </div>
        <div className="flex-col py-5">
          <ul>
            <li className='py-5 cursor-pointer'>
              <a onClick={() => setIsOpen(false)} href='#about'>About</a>
            </li>
            <li className='py-5 cursor-pointer'>
              <a onClick={() => setIsOpen(false)} href='#projects'>Projects</a>
            </li>
            <li className='py-5 cursor-pointer'>
              <a onClick={() => setIsOpen(false)} href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiFillGithub size={30} className="cursor-pointer" />
          <AiFillLinkedin size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

export default NavbarTwo;
