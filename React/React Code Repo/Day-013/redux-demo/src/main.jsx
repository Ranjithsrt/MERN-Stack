import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./context-auth-demo/App";

//1
//import Parent from "./props-demo/Parent";

//2
// import Parent from "./context-demo/Parent";
// import UserContext from "./context-demo/UserContext";

const user = {
  name: "Tivin",
  city: "Salem",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 1.Props Method (Prop Driling) */}
    {/* <Parent user={user} /> */}
    {/* 2. useContext Method */}
    {/* <UserContext.Provider value={{ user }}>
      <Parent />
    </UserContext.Provider> */}
    {/* 3.User Authentication */}
    <App />
  </StrictMode>
);
