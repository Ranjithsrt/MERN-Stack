import { createContext, useState, useEffect, useContext } from "react";

const FavoritesContext = createContext();

const STORAGE_KEY = "mealdb-favorites";

const loadFavoritesFromStorage = () => {
  try {
    const favorites = localStorage.getItem(STORAGE_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error loading favorites from storage:", error);
    return [];
  }
};
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(loadFavoritesFromStorage());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites to storage:", error);
    }
  }, [favorites]);

  const toggle = (meal) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(
        (favorite) => favorite.idMeal === meal.idMeal
      );

      return isFavorite
        ? prevFavorites.filter((favorite) => favorite.idMeal !== meal.idMeal)
        : [...prevFavorites, meal];
    });
  };

  const isFavorite = (id) =>
    favorites.some((favorite) => favorite.idMeal === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggle, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export default useFavorites;
