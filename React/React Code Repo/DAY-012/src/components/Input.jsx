import React from "react";

const Input = ({ type, placeholder, value, setValue, id, className = "" }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`w-full px-4 py-3 border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 rounded ${className}`}
    />
  );
};

export default Input;
