import React, { useEffect, useState } from "react";
import "./App.css";
const API_URL = "http://localhost:5000/todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Simple Todo App</h2>

      <ul style={{ padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo._id} style={{ margin: "10px 0", display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                textDecoration: todo.status ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button className="btnDel">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
