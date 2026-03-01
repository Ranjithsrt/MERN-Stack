import React from "react";
import { useFavorites } from "../hooks/useFavorites";
import { HeartOff, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  if (favorites.length === 0)
    return (
      <div className="text-center py-24">
        <HeartOff size={64} className="mx-auto text-slate-200 mb-4" />
        <h2 className="text-2xl font-bold text-slate-400">Your cookbook is empty.</h2>
      </div>
    );
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Your <span className="text-red-500">Favorites</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map((meal) => (
          <div key={meal.idMeal} className="relative group bg-white rounded-xl overflow-hidden border border-slate-300">
            <Link to={`/meal/${meal.idMeal}`}>
              <img src={meal.strMealThumb} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{meal.strMeal}</h3>
              </div>
            </Link>

            <button onClick={() => toggleFavorite(meal)} className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
