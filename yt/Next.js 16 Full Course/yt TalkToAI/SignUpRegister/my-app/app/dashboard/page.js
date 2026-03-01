"use client";

import { UserLogout } from "../action";
import { useRouter } from "next/navigation";
 const page = () => {
  const router = useRouter();
  const logout = async () => {
    const result = await UserLogout();
    if (result.success) {
      router.push("/login");
    }
  };

  return (
    <div
      className="flex min-h-screen
    justify-between p-24 bg-white text-black"
    >
      <h1 className="text-4xl font-bold uppercase ">Dashboard</h1>
      <form // action={logout}
      >
        <button
          type="button"
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-10"
        >
          Logout
        </button>
      </form>
      {/* server-only Product model removed from client component */}
     </div>
  );
};

export default page;
