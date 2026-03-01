import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("meal-favs")) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFavorites(saved);
  }, []);

  const toggleFavorite = (meal) => {
    const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
    let updated;
    if (isFav) {
      updated = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
    } else {
      updated = [
        ...favorites,
        {
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
          strCategory: meal.strCategory,
        },
      ];
    }
    setFavorites(updated);
    localStorage.setItem("meal-favs", JSON.stringify(updated));
  };

  const isFavorite = (id) => favorites.some((fav) => fav.idMeal === id);

  return { favorites, toggleFavorite, isFavorite };
};
