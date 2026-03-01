 import React from "react";
 import ReactDOM from "react-dom/client";
 import App from "./App";
 import { BankProvider } from "./context/BankContext";

 ReactDOM.createRoot(document.getElementById("root")).render(
   <BankProvider>
     <App />
   </BankProvider>
 );
