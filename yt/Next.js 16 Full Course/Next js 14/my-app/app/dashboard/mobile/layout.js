 import React from "react";

 export const metadata = {
   title: "Mobile Dashboard",
   description: "This is the mobile dashboard layout",
 };

 const Layout = ({ children }) => {
   return (
     <div>
       <h2>Mobile Layout</h2>
       {children}
     </div>
   );
 };

 export default Layout;
