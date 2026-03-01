import Link from "next/link";
import dbconnect from "./db/dbconnect";

export default function Home() {
  // connect to database
  dbconnect();
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 selection:bg-indigo-500 selection:text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] mix-blend-multiply animate-pulse delay-1000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-pink-500/10 blur-[120px] mix-blend-multiply animate-pulse delay-2000"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50/50 dark:bg-indigo-900/20 dark:border-indigo-800 backdrop-blur-sm mb-4 transition-transform hover:scale-105 cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">Next.js 16 & Tailwind v4 Ready</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Future of <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Authentication
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Experience the next generation of secure, fast, and beautiful authentication flows. 
            Built with the latest web technologies for a seamless user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/signup" className="w-full sm:w-auto group">
              <button className="btn-primary w-full sm:w-auto relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
            
            <Link href="/login" className="w-full sm:w-auto">
              <button className="btn-ghost w-full sm:w-auto border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800">
                Sign In
              </button>
            </Link>
          </div>

          {/* Features Grid mini */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
            {[
              { label: 'Secure', icon: '🛡️', desc: 'Enterprise grade security' },
              { label: 'Fast', icon: '⚡', desc: 'Lightning fast performance' },
              { label: 'Modern', icon: '🎨', desc: 'Beautiful modern UI' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center p-4 rounded-2xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <span className="text-2xl mb-2">{feature.icon}</span>
                <h3 className="font-bold text-slate-900 dark:text-white">{feature.label}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
