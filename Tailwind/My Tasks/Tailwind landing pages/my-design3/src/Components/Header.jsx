import React from "react";
import banner from "../assets/img/banner.png";

const Header = () => {
  return (
    <header
      className="mt-10 w-full h-[450px] bg-cover bg-center py-16 px-4 text-center text-white relative"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

      {/* content */}

      <div className="relative mt-10 z-10 h-100 text-center">
        <h1 className="font-black text-4xl leading-15">
          Master the Ancient Art of <br /> Neapolitan Pizza
        </h1>
        <p className="mt-4 text-[10px] leading-6">
          Join our exclusive, once-a-year cooking masterclass in the heart of
          Naples and <br />
          learn the secrets of authentic homemade pizza from world-renowned
          pizzaioli.
        </p>
        <button className="bg-[#b97746] mt-4 py-2 px-4 rounded-full hover:bg-[#cd9a73] uppercase font-sm">
          Reserve Your Spot
        </button>
      </div>
    </header>
  );
};

export default Header;
