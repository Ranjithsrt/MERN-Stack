import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import useFavorites from "../contexts/FavoritesContext";
const MealCard = ({ meal }) => {
  const { toggle, isFavorite } = useFavorites();
  const fav = isFavorite(meal.idMeal);
  return (
    <div title={meal.strMeal} className="relative">
      <FavoriteButton meal={meal} onToggle={toggle} isFav={fav} />
      <Link
        to={`/meal/${meal.idMeal}`}
        className=" block rounded overflow-hidden shadow hover:shadow-lg"
      >
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full object-cover"
        />
        <p className="text-center mt-2 text-emerald-900 p-3 font-medimum truncate">
          {meal.strMeal}
        </p>
      </Link>
    </div>
  );
};

export default MealCard;
