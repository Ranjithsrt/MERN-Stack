import { LogOut, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const LogoutModal = () => {
  return (
    <div className="flex items-center gap-4 border-l border-slate-200 pl-4 ml-4">
      <Link className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          <User size={18} />
        </div>
        <span className="text-sm font-medium hidden md:block capitalize">
          Tivin
        </span>
      </Link>
      <button
        className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-slate-50"
        title="Logout"
      >
        <LogOut size={20} />
      </button>
    </div>
  );
};

export default LogoutModal;
