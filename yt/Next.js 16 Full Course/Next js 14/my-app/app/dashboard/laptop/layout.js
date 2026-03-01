 export const metadata = {
   title: "Laptop Dashboard",
   description: "This is the laptop dashboard layout",
 };

 export default function Layout({ children }) {
   return (
     <div>
       <h2>Laptop Layout</h2>
       {children}
     </div>
   );
 }
