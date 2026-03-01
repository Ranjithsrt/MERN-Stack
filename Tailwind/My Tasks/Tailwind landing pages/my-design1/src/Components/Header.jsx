import React from "react";
import banner from "../assets/img/banner.png";

const Header = () => {
  return (
    <header
      className="h-[400px] my-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>

      {/* Content */}
      <div className=" text-center relative z-20 text-white p-10 ">
        <h1 className="text-5xl font-black mt-20 capitalize">
          Transforming Ideas into Reality
        </h1>
        <p className="my-6 leading-6 text-[10px]">
          We build innovative software solutions tailored to your business
          needs. <br /> From concept to deployment, we're with you every step of
          the way.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase text-sm">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
