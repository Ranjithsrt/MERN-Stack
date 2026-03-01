$(document).ready(function () {
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("smartTasks")) || [];
    $("#taskList").empty();
    if (tasks.length === 0) {
      $("#taskList").html(`<div class="empty-state">No tasks yet. Add one above!</div>`);
      return;
    }
    tasks.forEach((task) => addTaskToDOM(task));
  }

  function saveTasks() {
    const tasks = [];

    $(".task-item").each(function () {
      const item = $(this);
      const taskData = {
        text: item.find(".task-text").text(),
        category: item.find(".task-category").text(),
        completed: item.hasClass("completed"),
      };
      tasks.push(taskData);
    });

    localStorage.setItem("smartTasks", JSON.stringify(tasks));
  }

  function addTaskToDOM(task) {
    const categoryClass = task.category;
    const checked = task.completed ? "checked" : "";
    const completedClass = task.completed ? "completed" : "";
    const html = `
      <li class="task-item ${completedClass}" data-category='${categoryClass}'>
        <input type="checkbox" ${checked} />
        <span class="task-text">${task.text}</span>
        <span class="task-category">${task.category}</span>
        <button class="delete-btn">X</button>
      </li> 
    `;
    $("#taskList").append(html);
  }

  $("#addBtn").on("click", function () {
    const text = $("#taskInput").val().trim();
    const category = $("#category").val();
    if (!text) return;

    const task = { text, category, completed: false };
    addTaskToDOM(task);
    saveTasks();
    $("#taskInput").val("");
  });

  loadTasks();
});
