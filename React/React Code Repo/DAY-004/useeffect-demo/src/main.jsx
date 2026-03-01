import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import A from "./components/A.jsx";
import B from "./components/B.jsx";

const users = [
  { id: 1, name: "Ram", age: 22, gender: "Male" },
  { id: 2, name: "Sam", age: 12, gender: "Male" },
  { id: 3, name: "Raja", age: 8, gender: "Male" },
  { id: 4, name: "Sara", age: 16, gender: "Female" },
  { id: 5, name: "Tiya", age: 16, gender: "Female" },
];

createRoot(document.getElementById("root")).render(
  <>
    <A items={users} />
    <B items={users} />
  </>
);
