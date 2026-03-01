import React, { useEffect, useState } from "react";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ meal }) => (
  <Link to={`/meal/${meal.idMeal}`} className="bg-white group rounded-xl border overflow-hidden shadow hover:shadow-xl border-slate-300 transition-all">
    <div className="aspect-video overflow-hidden">
      <img src={`${meal.strMealThumb}`} alt={`${meal.strMeal}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
    </div>
    <div className="p-4">
      <span className="text-orange-500 text-[10px] uppercase font-bold">{meal.strCategory}</span>
      <h3 className="text-lg font-bold truncate">{meal.strMeal}</h3>
      <div className="mt-2 flex items-center justify-between text-slate-400 text-xs">
        <span className="flex items-center gap-1">
          <MapPin size={12} /> {meal.strArea}
        </span>
        <ArrowRight size={14} className="text-orange-500" />
      </div>
    </div>
  </Link>
);

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
const Home = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (s = "") => {
    const res = await fetch(`${BASE_URL}/search.php?s=${s}`);
    const data = await res.json();
    setMeals(data.meals || []);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMeals();
  }, []);
  return (
    <div>
      <header className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-6">
          Find your next <span className="text-orange-500">favorite</span> meal.
        </h1>
        <div className="relative">
          <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" size={20} />
          <input type="text" placeholder="Search ingredients or dishes..." className="w-full pl-12 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none pr-4 py-4" onChange={(e) => fetchMeals(e.target.value)} />
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
