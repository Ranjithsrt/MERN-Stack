import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CategoryMeals from "./pages/CategoryMeals";
import MealDetail from "./pages/MealDetail";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Favorites from "./pages/Favorites";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryMeals />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResult />} />
          <Route
            path="*"
            element={
              <h1 className="text-3xl font-bold text-center my-4 text-emerald-900">
                404 Not Found
              </h1>
            }
          />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default App;
