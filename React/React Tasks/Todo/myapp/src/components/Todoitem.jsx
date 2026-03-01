import React from 'react'

const Todoitem = ({ todo, toggleTodo, deleteTodo, EditTodo }) => {
  return (
    <div className="flex items-center justify-between p-2 my-5 rounded-md border border-gray-300">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className="text-lg font-medium text-gray-700">{todo.text}</span>

      <button
        className="bg-blue-500 text-white p-2 px-5 rounded-md"
        onClick={() => {
          const updatedText = prompt("Edit Todo", todo.text);
          if (updatedText !== null && updatedText.trim() !== "") {
            EditTodo(todo.id, updatedText);
          }
        }}
      >
        Edit
      </button>

      <button
        className="bg-red-500 text-white p-2 px-5 rounded-md"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todoitem