import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Service from "./Components/Service";
import Client from "./Components/Client";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container mx-auto font-['Inter'] text-base antialiased  font-semibold cursor-pointer">
      <NavBar />
      <Header />
      <Service />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
