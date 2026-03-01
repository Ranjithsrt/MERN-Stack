import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        {/* <nav className="flex items-center justify-between p-10 bg-black text-800 text-white">
          <div className="text-2xl font-bold">My Next.js App</div>
          <ul className="flex space-x-4 ">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Settings</li>
          </ul>
        </nav> */}

        <main className="p-10 bg-blue-400 my-5 ">{children}</main>

        

        {/* <footer>
          <div className="p-10 bg-black text-white text-center">
            &copy; 2024 My Next.js App. All rights reserved.
          </div>
        </footer> */}
      </header>
    </>
  );
};

export default DashboardLayout;
