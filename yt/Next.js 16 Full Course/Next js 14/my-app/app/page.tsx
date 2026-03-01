 import "./globals.css" 
 import Header from "./Header";
 import Image from "next/image";
 
 import img from "../public/moravian-star-6776388_1280.jpg"
  const page = () => {
   return (
     <>
       <Header />
       <div className="flex items-center justify-center h-100">
         <h1 className="text-[30px] font-bold  ">
           Welcome to <span className="font-bold text-[55px] ">Next.js</span>
         </h1>
         <br />
         {/* <img src="moravian-star-6776388_1280.jpg" alt="" className="w-[400px]" /> */}
         {/* <Image src={img} alt="" className="w-[400px]" />
          */}

         <Image
           src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8c3BsYXNofHwwfHx8fDE2MjIxODE4NDA&ixlib=rb-1.2.1&q=80&w=1080"
           alt="Unsplash image"
           width={100}
           height={100}
           className="object-cover"
         />
       </div>
     </>
   );
 }
 
 export default page