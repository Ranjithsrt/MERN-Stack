 export default async function ShopPage({ params }) {
   const { slug } = await params; // ← important fix

   return (
     <div>
       <h1>Shop Slug: {slug.join(" / ")}</h1>
     </div>
   );
 }
