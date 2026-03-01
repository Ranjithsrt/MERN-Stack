import React from "react";
import { ChefHat, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 border-b border-slate-300 sticky top-0 z-50 mb-6 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-orange-500 font-black text-2xl">
          <ChefHat size={32} />
          <span className="text-slate-800 tracking-tight hidden sm:block">
            Flavor<span className="text-orange-500">Find</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 text-slate-600 font-medium">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Explore
          </Link>
          <Link to="/favorites" className="bg-slate-100 p-2 rounded-full transition-all group relative">
            <Heart size={20} className="group-hover:text-red-500 group-hover:fill-red-500" />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center font-bold rounded-full">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
