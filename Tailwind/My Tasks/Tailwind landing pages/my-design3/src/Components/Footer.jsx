import React from "react";
import { ReactComponent as Logo } from "../assets/img/insta.svg";
import { ReactComponent as Logo1 } from "../assets/img/twitter.svg";
import { ReactComponent as Logo2 } from "../assets/img/facebook.svg";

const Footer = () => {
  return (
    <footer className="flex justify-around items-center mt-10 bg-white p-10 shadow-lg">
      {/* Copyright */}
      <div>
        <h1 className="text-gray-500 text-[12px]">
          © 2024 Pizza Elite Napoli. All rights reserved.
        </h1>
      </div>
      {/* social media icons */}
      <div className="flex gap-3">
        <Logo className="h-5 w-5 text-blue-600" />
        <Logo1 className="h-5 w-5 text-blue-600" />
        <Logo2 className="h-5 w-5 text-blue-600" />
      </div>
      {/* terms and conditions */}
      <div>
        <ul className="flex gap-3 text-gray-500 text-[12px] ">
          <li>
            <a href="#"></a> Terms
          </li>
          <li>
            <a href="#"></a>Privacy
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
