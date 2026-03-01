 export default async function BlogPost({ params }) {
   const { slug } = await params; // ⭐ must await

   return (
     <div>
       <h1>Blog Post: {slug}</h1>
     </div>
   );
 }
