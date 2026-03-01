 import { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import LoadingSpinner from "../components/LoadingSpinner";
 import MealCard from "../components/MealCard";
 import { fetchMealsByCategory } from "../api/mealdb";

 const CategoryMeals = () => {
   const { category } = useParams();
   const [meals, setMeals] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     setLoading(true);

     fetchMealsByCategory(category)
       .then((res) => {
         setMeals(res.data.meals || []);
       })
       .catch((err) => console.error(err))
       .finally(() => setLoading(false));
   }, [category]);

   if (loading) return <LoadingSpinner />;

   return (
     <div className="max-w-6xl mx-auto">
       <h1 className="text-3xl font-bold text-center my-4 text-emerald-900">
         Category Meals - {category}
       </h1>

       {meals.length === 0 ? (
         <p className="text-center mb-5 text-sm text-gray-600">
           No meals found
         </p>
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

 export default CategoryMeals;
