import Image from "next/image";
import Button from "./components/Button";
// ISR - Incremental Static Regeneration
export const revalidate = 10;

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  return (
    <>
      <div className="w-full h-screen flex  flex-col justify-center items-center">
        <h1 className="text-4xl font-bold underline my-10 ">Hello world!</h1>
        {/* <ul className="list-none  p-10 m-5">
          {data.map((user) => (
            <li key={user.id} className="mb-4 ">
              <h2 className="text-1xl font-bold uppercase my-2">{user.id}</h2>
              <h2 className="text-1xl font-bold uppercase">{ user.name}</h2>
              <p className="text-sm capitalize my-3">{user.email}</p>
              <img
                src="https://pressbooks.cuny.edu/app/uploads/sites/93/2022/08/thanuj-mathew-8CSTVoDMEXg-unsplash-scaled.jpg"
                width={100}
                height={100}
                quality={100}
              ></img>
              <Image src="https://pressbooks.cuny.edu/app/uploads/sites/93/2022/08/thanuj-mathew-8CSTVoDMEXg-unsplash-scaled.jpg" width={100} height={100} 
              quality={100}
              alt="sunflower"
               ></Image>
            </li>
          ))}
        </ul> */}
        {/* {JSON.stringify(new Date().toLocaleTimeString())} */}
        <Button />
         
      </div>
    </>
  );
}
