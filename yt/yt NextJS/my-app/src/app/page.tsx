 import Link from "next/link";

 export default function Home() {
   return (
     <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-black dark:to-neutral-900 flex items-center justify-center p-6">
       <main className="w-full max-w-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 dark:border-neutral-700">
         {/* Title */}
         <h1 className="text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-10">
           Hello World 👋
         </h1>

         {/* Navigation */}
         <nav className="flex flex-col gap-6">
           <Link
             href="/dashboard"
             className="text-3xl font-semibold text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all hover:translate-x-2"
           >
             ➤ Dashboard
           </Link>

           <Link
             href="/dashboard/setting"
             className="text-3xl font-semibold text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-all hover:translate-x-2"
           >
             ➤ Setting
           </Link>
         </nav>
       </main>
     </div>
   );
 }
