import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchCategories } from "../api/mealdb";
import { Link } from "react-router-dom";

const Home = () => {
  const [Categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch categories or call api
    fetchCategories()
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  return <div className="max-w-6xl mx-auto">
    <div>
      <h1 className="text-3xl font-bold text-center my-4
       text-emerald-900 tracking-light
      ">
        Browse Meal Categories</h1>
        <p className="text-center mb-15 text-[12px] text-gray-600">Discover delicious meals from around the world</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Categories.map((category) => (
          <Link
            to={`/category/${category.strCategory}`}
            key={category.idCategory}
            className="bg-white rounded-lg shadow-md p-4 group cursor-pointer"
          >
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-full h-50 object-cover rounded-lg shadow mb-4 group-hover:scale-105 transition duration-300 ease-in-out p-5"
            />
            <h2 className="text-xl font-semibold mb-2 text-center text-emerald-900 uppercase tracking-wider">{category.strCategory}</h2>
          </Link>
        ))}
      </div>
    </div>

  </div>;
};

export default Home;
