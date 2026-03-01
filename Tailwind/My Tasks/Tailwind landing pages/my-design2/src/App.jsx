import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import AcademicPrograms from "./Components/AcademicPrograms";
import UpcomingEvents from "./Components/UpcomingEvents";
import STestimonials from "./Components/STestimonials";
import JoinUs from "./Components/JoinUs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="container mx-auto font-['Inter'] text-base antialiased  font-semibold cursor-pointer">
      <NavBar />
      <Header />
      <AcademicPrograms />
      <UpcomingEvents />
      <STestimonials />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
