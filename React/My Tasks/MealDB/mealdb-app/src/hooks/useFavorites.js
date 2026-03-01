import { useState, useEffect } from "react";

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

export default function useFavorite() {
    const [favorites, setFavorites] = useState(loadFavoritesFromStorage());

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        } catch (error) {
            console.error("Error saving favorites to storage:", error);
        }
    }, [favorites]);

    const toggle= (meal) => {
         setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((favorite) => favorite.idMeal === meal.idMeal);

            return isFavorite ? prevFavorites.filter((favorite) => favorite.idMeal !== meal.idMeal) : [...prevFavorites, meal];
        });
    };

    const isFavorite = (meal) => favorites.some((favorite) => favorite.idMeal === meal.idMeal);

    return { favorites, toggle, isFavorite };
}

