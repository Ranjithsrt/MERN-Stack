import { useEffect, useState } from "react";

export default function useTodos() {
  const data = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const EditTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: newText.trim() } : item
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const ClearAll = () => {
    setTodos([]);
  };
  return { todos, addTodo, toggleTodo, deleteTodo, ClearAll, EditTodo };
}
