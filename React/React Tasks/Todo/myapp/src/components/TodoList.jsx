import React from "react";
import TodoItem from "./Todoitem";

const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo, EditTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-20 animate-fade-in">
        <div className="text-6xl mb-6 text-gray-300">📝</div>
        <div className="text-2xl font-semibold text-gray-500 mb-2">
          No tasks yet!
        </div>
        <p className="text-lg text-gray-400">
          Add your first task above to get started
        </p>
      </div>
    );
  }
  return (
    <div className="mt-8 space-y-2">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="animate-slide-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            EditTodo={EditTodo}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
