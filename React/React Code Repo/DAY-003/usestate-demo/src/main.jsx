import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import Basket from "./Basket.jsx";
import Password from "./Password.jsx";
import ColorPicker from "./ColorPicker.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Counter />
    <Basket />
    <Password />
    <ColorPicker />
  </StrictMode>
);
