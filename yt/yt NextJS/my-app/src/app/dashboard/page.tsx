"use client";
import { useRouter } from "next/navigation";
export default function Dashboard() {
   const router = useRouter();

   const handleBack = () => {
     router.push("/dashboard/setting");
   };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <button className="bg-red-500 " onClick={handleBack}>Back</button>
        <h1 className="text-4xl font-bold text-black dark:text-white"> Dashboard</h1> 
      </main>
    </div>
  );
}
