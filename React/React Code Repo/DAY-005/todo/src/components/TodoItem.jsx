import { Check, Trash2 } from "lucide-react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`cursor-pointer group flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 ${todo.completed ? "bg-gray-50 border-gray-200 opacity-75" : "bg-white border-gray-300 hover:border-blue-400 hover:shadow-lg"}`}>
      <button onClick={() => toggleTodo(todo.id)} className={`w-9 h-9 rounded-full border-3 flex items-center justify-center transition-all ${todo.completed ? "bg-linear-to-r from-green-500 to-emerald-500 border-green-500" : "border-gray-400 hover:border-blue-500"}`}>
        <Check size={20} className="text-white font-bold" />
      </button>
      <span className={`flex-1 text-lg font-medium transition-all ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 hover:bg-red-50 p-3 rounded-xl transition-all">
        <Trash2 size={22} />
      </button>
    </div>
  );
};

export default TodoItem;
