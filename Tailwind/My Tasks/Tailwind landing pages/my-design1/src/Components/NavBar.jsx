import React from "react";
import "../index.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

const NavBar = () => {
  return (
    <>
      <nav className="h-16 py-5 flex items-center justify-between mt-3">
        {/* Logo  */}
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-7 text-blue-600" />
          <h1 className="text-[17px] font-black uppercase">Innovatech</h1>
        </div>
        {/* Links */}
        <div>
          <ul
            className=" text-[14px]
           flex items-center gap-4 font-medium uppercase  text-[#475569]"
          >
            <li>
              <a href="#"></a> Service
            </li>
            <li>
              <a href="#"></a> Portfolio
            </li>
            <li>
              <a href="#"></a> About
            </li>
            <li>
              <a href="#"></a> Contact
            </li>
          </ul>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm uppercase py-2 px-4 rounded">
          Get a Quote
        </button>
      </nav>
    </>
  );
};

export default NavBar;
