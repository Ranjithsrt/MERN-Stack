import React from "react";
import { ArrowRight, MapPin, Search } from "lucide-react";

const Card = () => (
  <a href="#" className="bg-white group rounded-xl border overflow-hidden shadow hover:shadow-xl border-slate-300 transition-all">
    <div className="aspect-video overflow-hidden">
      <img src="https://www.themealdb.com/images/media/meals/pb6mj11763788331.jpg" alt="food" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <div className="p-4">
      <span className="text-orange-500 text-[10px] uppercase font-bold">Vegetarian</span>
      <h3 className="text-lg font-bold truncate">Ezme</h3>
      <div className="mt-2 flex items-center justify-between text-slate-400 text-xs">
        <span className="flex items-center gap-1">
          <MapPin size={12} /> Turkish
        </span>
        <ArrowRight size={14} className="text-orange-500" />
      </div>
    </div>
  </a>
);

const Home = () => {
  return (
    <div>
      <header className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-6">
          Find your next <span className="text-orange-500">favorite</span> meal.
        </h1>
        <div className="relative">
          <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" size={20} />
          <input type="text" placeholder="Search ingredients or dishes..." className="w-full pl-12 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none pr-4 py-4" />
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
