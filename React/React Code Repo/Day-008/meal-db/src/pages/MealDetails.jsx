import { CheckCircle, Globe, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  const fetchMealById = async (id = "") => {
    const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await res.json();
    setMeal(data.meals[0]);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMealById(id);
  }, [id]);

  if (!meal) return <p className="text-center py-20">Loading recipe...</p>;

  const ingredients = Array.from({ length: 20 })
    .map((_, i) => ({
      name: meal[`strIngredient${i + 1}`],
      measure: meal[`strMeasure${i + 1}`],
    }))
    .filter((item) => item.name);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative">
          <img src={meal.strMealThumb} className="rounded-xl shadow w-full" />
          <button className="absolute top-6 right-6 p-4 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
            <Heart size={28} className="text-slate-300" />
          </button>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex gap-2 mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase">{meal.strCategory}</span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Globe size={12} /> {meal.strArea}
            </span>
          </div>
          <h1 className="text-5xl font-black mb-6 leading-tight">{meal.strMeal}</h1>
          <h3 className="text-xl font-bold mb-4">Ingredients</h3>

          <div className="grid grid-cols-2 gap-3">
            {ingredients.map((ing, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-white border rounded-md border-slate-100 ">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm font-medium">
                  {ing.measure} {ing.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white p-8 md:p-12 rounded-xl border-slate-300 shadow-sm border">
        <h2 className="text-3xl font-bold mb-6">Cooking Instructions</h2>
        <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetails;
