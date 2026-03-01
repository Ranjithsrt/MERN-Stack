// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center py-2 bg-white text-black">
//       <h1 className="text-4xl font-bold">Hello world..!</h1>
//     </div>
//   );
// }


// "use client";

// "use cache";

export default async function Home() {
  let data = await fetch("http://localhost:4000/posts");
  let posts = await data.json();
  console.log("Hi from derver component");
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-white text-black">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="w-full max-w-2xl">
        {posts.map((post: any) => (
          <li key={post.id} className="mb-6 p-4 border rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">{post.name}</h2>
            <p className="text-gray-700">{post.next}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
