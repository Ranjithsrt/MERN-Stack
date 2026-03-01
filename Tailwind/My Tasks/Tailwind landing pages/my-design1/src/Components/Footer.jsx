import React from "react";

import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Logo1 } from "../assets/img/facebook.svg";
import { ReactComponent as Logo2 } from "../assets/img/twitter.svg";
import { ReactComponent as Logo3 } from "../assets/img/lin.svg";

const Footer = () => {
  return (
    <footer className="  shadow-lg mt-25 p-15 bg-black text-white ">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-7 text-blue-600" />
          <h1 className="text-[17px] font-black uppercase">Innovatech</h1>
        </div>

        {/* links */}
        <div>
          <ul className="flex items-center gap-4 font-medium  text-[12px] text-gray-500">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* social icons */}
        <div className="flex items-center gap-3">
          <Logo1 className="h-6 w-6 text-gray-500" />
          <Logo2 className="h-6 w-6 text-gray-500" />
          <Logo3 className="h-6 w-6 text-gray-500" />
        </div>
      </div>
      <p className="text-center mt-10 text-[10px] text-gray-500 ms-10">
        &copy; 2023 Innovatech Solutions. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
