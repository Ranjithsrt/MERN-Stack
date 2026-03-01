let t_input = document.getElementById("todo-input");
let btn = document.getElementById("todo-btn");
let todo_list = document.getElementById("todo-list");

btn.addEventListener("click", function () {
  let todo_txt = t_input.value;
  if (todo_txt === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerText = todo_txt;
    
    let EditBtn = document.createElement("button");
    EditBtn.innerText = "Edit";
    EditBtn.style.backgroundColor = "blue";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.backgroundColor = "red";

    li.appendChild(EditBtn);
    li.appendChild(deleteBtn);

    todo_list.appendChild(li);
    t_input.value = "";

    EditBtn.addEventListener("click", function () {
      let newTask = prompt("Edit your task:", li.firstChild.nodeValue);
      if (newTask !== null && newTask.trim() !== "") {
        li.firstChild.nodeValue = newTask;
      }
    });

    deleteBtn.addEventListener("click", function () {
      todo_list.removeChild(li);
    });
  }
  
});

