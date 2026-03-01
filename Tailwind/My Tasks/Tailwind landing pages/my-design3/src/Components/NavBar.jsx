import React from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center mt-7">
      {/* Logo and title */}
      <div className="flex items-center gap-3">
        <Logo className="h-8 w-8 text-[#b97746]" />
        <h1 className=" font-black text-[20px]">Pizza Elite </h1>
      </div>
      {/* Navigation links */}
      <div className="flex gap-4 items-center">
        <ul className="flex gap-4">
          <li className="text-[#b97746] uppercase  text-[15px]">
            <a href="#" className="hover:text-[#b97746]">
              About
            </a>
          </li>
          <li className="uppercase text-[15px]">
            <a href="#" className="hover:text-[#b97746]">
              The Class
            </a>
          </li>
          <li className="uppercase text-[15px]">
            <a href="#" className="hover:text-[#b97746]">
              Gallery
            </a>
          </li>
          <li className="uppercase text-[15px]">
            <a href="#" className="hover:text-[#b97746]">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <button className=" text-[15px] bg-[#b97746] text-white py-2 px-4 rounded hover:bg-[#db8d73]">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
