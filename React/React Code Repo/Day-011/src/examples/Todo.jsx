import React, { memo, useCallback, useState } from "react";

const TodoItem = memo(({ todo, onDelete, onToggle }) => {
  console.log(`Rendering ${todo.text}..`);
  return (
    <li>
      <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const handleToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    },
    [todos]
  );

  const handleDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div>
      <h3>Todo Demo</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;

/*

import React, { useState } from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  console.log(`Rendering ${todo.text}..`);
  return (
    <li>
      <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h3>Todo Demo</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
*/
