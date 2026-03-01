import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Details from "./Components/Details";
import ElitePizzaCard from "./Components/ElitePizzaCard";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="mx-3 font-[poppins] cursor-pointer">
      <NavBar />
      <Header />
      <Details />
      <ElitePizzaCard />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
