 import axios from "axios";

 // base url
 const BASE = "https://www.themealdb.com/api/json/v1/1";

 // fetch all categories
 export const fetchCategories = () => {
   return axios.get(`${BASE}/categories.php`);
 };

 // fetch meals by category
 export const fetchMealsByCategory = (cat) => {
   return axios.get(`${BASE}/filter.php?c=${cat}`);
 };

 // fetch meal by id
 export const fetchMealById = (id) => {
   return axios.get(`${BASE}/lookup.php?i=${id}`);
 };

 // search meals
 export const searchMeals = (query) => {
   return axios.get(`${BASE}/search.php?s=${query}`);
 };
