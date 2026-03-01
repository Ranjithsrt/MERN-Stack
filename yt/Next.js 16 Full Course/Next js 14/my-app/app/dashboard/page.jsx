"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import dashboard from "../dashboard/dashboard.module.css";

const Dashboard = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();

  const userHaNDLER = () => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={dashboard.div}>
      <h1 className={dashboard.h1}>Welcome to dashboard</h1>
      
      <button onClick={userHaNDLER}
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Back</button>
    </div>
  );
};

export default Dashboard;
