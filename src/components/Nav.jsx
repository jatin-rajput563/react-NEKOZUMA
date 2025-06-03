import React, { useState } from "react";
import { Discord, Twitter } from "../utils/Icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="bg-[#1C2430]">
      <div className="flex justify-between items-center py-2 max-w-[880px] px-4 mx-auto relative">
        <a
          href="#"
          className="text-white font-normal text-[21.64px] leading-[100%] Franklin"
        >
          NEKOZUMA
        </a>

        <div onClick={toggleNavbar} className="z-50 lg:hidden cursor-pointer">
          <div className="flex flex-col space-y-1">
            <span
              className={`w-[30px] h-[5px] rounded bg-white transition-transform origin-left duration-300 ${
                isOpen ? "rotate-[36deg]" : ""
              }`}
            ></span>
            <span
              className={`w-[30px] h-[5px] rounded bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-[30px] h-[5px] rounded bg-white transition-transform origin-left duration-300 ${
                isOpen ? "-rotate-[39deg]" : ""
              }`}
            ></span>
          </div>
        </div>

        <ul
          className={`fixed top-0 bottom-0 right-0 w-full min-h-screen bg-[#00243C] flex flex-col items-center justify-center
          transition-all duration-300 z-40 gap-[32px]
          lg:static lg:flex-row lg:flex lg:min-h-fit lg:w-auto lg:bg-[#1C2430] lg:py-2
          ${isOpen ? "right-0" : "right-[-100%] hidden lg:flex"}`}
        >
          {["Overview", "Story", "Team"].map((item, i) => (
            <li
              key={i}
              className="text-white text-lg cursor-pointer relative group transition-all duration-300"
            >
              <a
                href="#"
                className="group-hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          <li className="text-white text-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#00FFE0] hover:animate-pulse">
            <a
              href="#"
              target="blank"
              className="inline-block transition-transform duration-500 ease-in-out"
            >
              <Discord />
            </a>
          </li>

          <li className="text-white text-lg cursor-pointer transition-all duration-300 hover:scale-125 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#00FFE0] hover:animate-pulse">
            <a
              href="#"
              target="blank"
              className="inline-block transition-transform duration-500 ease-in-out"
            >
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
