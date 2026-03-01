import Layout from "./Layout";
import { useState ,useContext} from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

const ThemeContextExample = () => {
  /*
  // props Example :

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  */

  const { theme, toggleTheme } =   useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Theme Context Example</h1>
      {/* <Layout theme={theme} toggleTheme={toggleTheme} /> */}
          <Layout />
     </div>
  );
};

export default ThemeContextExample;
