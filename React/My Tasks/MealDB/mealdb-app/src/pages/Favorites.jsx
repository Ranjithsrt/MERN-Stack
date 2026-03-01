import useFavorites from "../contexts/FavoritesContext";
import MealCard from "../components/MealCard";
import { Link } from "react-router-dom";
const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.length === 0 ? (
          <p className="text-center mb-5 mt-5 text-sm text-gray-600">
            No favorite meals added yet.
            <Link to="/" className="text-emerald-900 underline mx-5 bg-emerald-100 px-2 py-1">Explore Meals</Link>
          </p>
        ) : (
          favorites.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
        )}
        ;
      </div>
    </div>
  );
};

export default Favorites;
