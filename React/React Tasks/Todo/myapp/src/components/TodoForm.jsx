import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form className="flex items-center gap-3 mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 p-4 rounded-xl border-2 border-gray-200 bg-white/70 backdrop-blur-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 placeholder:text-gray-400 text-gray-700 font-medium shadow-sm hover:shadow-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </form>
  );
};

export default TodoForm;
