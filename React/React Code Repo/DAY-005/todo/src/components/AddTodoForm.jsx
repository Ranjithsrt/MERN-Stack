import { Plus } from "lucide-react";
import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form className="flex gap-3 mb-10" onSubmit={handleSubmit}>
      <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="What needs to be done today?" className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all" />
      <button type="submit" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded font-bold flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
        <Plus size={28} /> Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
