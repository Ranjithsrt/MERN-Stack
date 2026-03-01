document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");
  const todoForm = document.getElementById("todoForm");
  const todoList = document.getElementById("todoList");
  let todos = getTodos();

  function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      todoList.appendChild(createTodoElement(todo, index));
    });
  }

  function createTodoElement(todo, index) {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2 bg-gray-100 rounded";
    li.innerHTML = `
      <div class="flex items-center gap-2">
        <input type="checkbox" class="todo-checkbox accent-blue-500" data-index="${index}" ${
      todo.completed ? "checked" : ""
    } aria-label="Mark as completed">
        <span class="${todo.completed ? "line-through text-gray-400" : ""}">${
      todo.text
    }</span>
      </div>
      <div class="flex gap-2">
        <button type="button" class="edit-btn bg-yellow-400 text-white px-2 py-1 rounded" data-index="${index}" aria-label="Edit task">Edit</button>
        <button type="button" class="delete-btn bg-red-500 text-white px-2 py-1 rounded" data-index="${index}" aria-label="Delete task">Delete</button>
      </div>
    `;

    li.querySelector(".todo-checkbox").addEventListener("change", (e) => {
      toggleTodoCompleted(index, e.target.checked);
    });

    li.querySelector(".edit-btn").addEventListener("click", () => {
      editTodo(index);
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      deleteTodo(index);
    });

    return li;
  }

  function addTodo(text) {
    todos.push({ text, completed: false });
    saveTodos();
    renderTodos();
  }

  function toggleTodoCompleted(index, completed) {
    todos[index].completed = completed;
    saveTodos();
    renderTodos();
  }

  function editTodo(index) {
    const newText = prompt("Edit task:", todos[index].text);
    if (newText && newText.trim()) {
      todos[index].text = newText.trim();
      saveTodos();
      renderTodos();
    }
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
      addTodo(text);
      todoInput.value = "";
    }
  });

  renderTodos();
});
