 const FictionPage = async ({ params }) => {
   const { fiction } = await params; // <-- Important

   return (
     <div className="flex justify-center items-center h-screen">
       {/* <h1 className="text-4xl font-bold">Book Fiction Page : {fiction}</h1> */}
      
       <h1 className="text-4xl font-bold"> Book Fiction Page : {fiction[0]}</h1>
     </div>
   );
 };

 export default FictionPage;
