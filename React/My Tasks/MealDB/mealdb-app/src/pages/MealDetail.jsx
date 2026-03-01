import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMealById } from "../api/mealdb";
import useFavorites from "../contexts/FavoritesContext";
import LoadingSpinner from "../components/LoadingSpinner";
import FavoriteButton from "../components/FavoriteButton";

const MealDetail = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isFavorite, toggle } = useFavorites();

  useEffect(() => {
    setLoading(true);

    fetchMealById(id)
      .then((res) => {
        setMeal(res.data.meals?.[0] || null);
        setError(null);
      })
      .catch(() => {
        setError("Failed to fetch meal details. Please try again later.");
        setMeal(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;

  if (!meal)
    return <p className="text-center text-gray-500 mt-6">Meal not found</p>;

  const ingredient = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientName = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredientName?.trim()) ingredient.push(`${measure} ${ingredientName}`);
  }
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 md:h-80 object-cover"
        />
        <FavoriteButton
          meal={meal}
          isFav={isFavorite(meal.idMeal)}
          onToggle={toggle}
        />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {meal.strMeal}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {meal.strCategory}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {meal.strArea}
          </span>
          {meal.strTags && (
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              {meal.strTags}
            </span>
          )}
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Ingredients
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ingredient.map((ing, index) => (
              <li
                key={index}
                className="bg-gray-50 px-3 py-2 rounded-md text-gray-700"
              >
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Instructions
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Watch on YouTube
            </a>
          )}
          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Original Recipe
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
