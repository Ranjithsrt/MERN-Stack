import React from "react";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

// const Themetoggler = ({theme, toggleTheme}) => {
const Themetoggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="bg-blue-600 text-white my-3 p-3">
      switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default Themetoggler;
