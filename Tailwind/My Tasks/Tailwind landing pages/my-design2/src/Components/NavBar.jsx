import React from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      {/* logo */}
      <div className="flex items-center my-5">
        <Logo className="h-7 w-7 text-blue-600" />
        <h1 className="font-black mx-3 capitalize">Brighton Academy</h1>
      </div>
      {/* links */}
      <div>
        <ul className="flex gap-5 text-[12px] text-gray-600 uppercase">
          <li>
            <a href="#"></a>About
          </li>
          <li>
            <a href="#"></a>Academics
          </li>
          <li>
            <a href="#"></a>Admissions
          </li>
          <li>
            <a href="#"></a>Campus Life
          </li>
          <li>
            <a href="#"></a>News & Events
          </li>
        </ul>
      </div>
      {/* button */}
      <button className="bg-blue-600 text-white py-2 px-4 rounded  text-sm hover:bg-blue-700  uppercase">
        Apply Now
      </button>
    </nav>
  );
};

export default NavBar;
