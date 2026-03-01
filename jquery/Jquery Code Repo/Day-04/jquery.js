$(document).ready(function () {
  const taskList = $("#taskList");
  const taskInput = $("#taskInput");
  const filters = $(".filters button");

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("smartTasks")) || [];
    taskList.empty();
    if (tasks.length === 0) {
      taskList.html(`<div class="empty-state">No tasks yet. Add one above!</div>`);
      return;
    }
    tasks.forEach((task) => addTaskToDOM(task));
    applyFilters();
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
        <span class="task-text ${completedClass}">${task.text}</span>
        <span class="task-category">${task.category}</span>
        <button class="delete-btn">X</button>
      </li> 
    `;
    taskList.append(html);
  }

  $("#addBtn").on("click", function () {
    const text = taskInput.val().trim();
    const category = $("#category").val();
    if (!text) return;

    const task = { text, category, completed: false };
    addTaskToDOM(task);
    saveTasks();
    taskInput.val("");
    applyFilters();
  });

  //Delete Task
  taskList.on("click", ".delete-btn", function () {
    const item = $(this).closest(".task-item");
    item.slideUp(300, function () {
      $(this).remove();
      saveTasks();
      if (taskList.children().length === 0) {
        taskList.html(`<div class="empty-state">No tasks yet. Add one above!</div>`);
      }
    });
  });

  //Enter to Save
  taskInput.on("keypress", function (e) {
    if (e.which === 13) {
      $("#addBtn").click();
    }
  });

  //Toggle Class
  taskList.on("change", "input[type='checkbox']", function () {
    const item = $(this).closest(".task-item");
    const text = $(this).next(".task-text");
    item.toggleClass("completed");
    text.toggleClass("completed");
    saveTasks();
  });

  filters.on("click", function () {
    filters.removeClass("active");
    $(this).addClass("active");
    applyFilters();
  });

  function applyFilters() {
    const filter = $(".filters button.active").data("filter");

    $(".task-item").each(function () {
      const item = $(this);
      const matchesFilter = filter === "all" || item.data("category") === filter;
      if (matchesFilter) {
        item.show();
      } else {
        item.hide();
      }
    });

    const visibleTasks = $(".task-item:visible").length;
    console.log(visibleTasks);

    if (visibleTasks === 0) {
      $(taskList).append("<div class='empty-state'>No Matching Tasks</div>");
    } else if (visibleTasks > 0) {
      $(taskList).find(".empty-state").remove();
    }
  }

  //Live Search
  $("#search").on("keyup", function () {
    const query = $(this).val().toLowerCase();
    $(".task-item").each(function () {
      const item = $(this);
      const text = item.find(".task-text").text().toLowerCase();
      if (text.includes(query)) {
        item.show();
      } else {
        item.hide();
      }
    });
  });

  loadTasks();
});
