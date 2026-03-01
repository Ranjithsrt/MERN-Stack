import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMeals } from "../api/mealdb";
import LoadingSpinner from "../components/LoadingSpinner";
import MealCard from "../components/MealCard";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("q") || "";

  useEffect(() => {
    if (!query) {
      setMeals([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    searchMeals(query)
      .then((res) => setMeals(res.data.meals || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-emerald-900">
        Search Results for "{query}"
      </h2>
      {meals.length === 0 ? (
        <p className="text-center mb-5 text-sm text-gray-600">No meals found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
