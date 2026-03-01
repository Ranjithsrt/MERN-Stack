import React, { useEffect, useState } from "react";
import "./App.css";
const API_URL = "http://localhost:5000/todos";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [text, setText] = useState("");
  const [id, setId] = useState(null);
  const [status, setStatus] = useState(null);

  //Load Data From DB
  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };

  //Run at page load
  useEffect(() => {
    fetchTodos();
  }, []);

  //Delete todo
  const deleteTodo = async (id) => {
    if (confirm("Are you sure to delete")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchTodos();
    }
  };

  //Add Todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!text) return;
    if (id) {
      //Update
      const updatedTodo = { _id: id, text, status };
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });
      const data = await res.json();
      console.log(data);
    } else {
      //Insert
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      console.log(data);
    }

    setText("");
    setId(null);
    fetchTodos();
  };

  //Edit Todo

  const editTodo = (todo) => {
    setId(todo._id);
    setText(todo.text);
    setStatus(todo.status);
  };

  //Update Status

  const toggleTodo = async (todo) => {
    const updatedTodo = { ...todo, status: !todo.status };
    const res = await fetch(`${API_URL}/${todo._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTodo),
    });
    const data = await res.json();
    console.log(data);
    fetchTodos();
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Simple Todo App</h2>

      <form onSubmit={addTodo}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit" className="btnAdd">
          {id ? "Update Data" : "Save Data"}
        </button>
      </form>

      <ul style={{ padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo._id} style={{ margin: "10px 0", display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                textDecoration: todo.status ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(todo)}
            >
              {todo.text}
            </span>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btnEdit" onClick={() => editTodo(todo)}>
                Edit
              </button>
              <button className="btnDel" onClick={() => deleteTodo(todo._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
