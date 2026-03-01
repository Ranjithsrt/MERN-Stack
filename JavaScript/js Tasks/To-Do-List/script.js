// const todoList = {
//   tasks: [
//     { id: 1, description: "play music", completed: true },
//     { id: 2, description: "cooking", completed: false },
//   ],

//   addTask: function (description) {
//     const task = {
//       id: this.tasks.length + 1,
//       description: description,
//       completed: false,
//     };
//     this.tasks.push(task);
//     console.log("Task Added");
//   },

//   listTasks: function () {
//     const ul = document.querySelector("ul");
//     let output = "";
//     this.tasks.forEach((task, index) => {
//       output += `<li>
//             <span onclick='todoList.completeTask(${task.id})' class="${
//         task.completed ? "completed" : ""
//       }" >${index + 1}. ${task.description}</span>
//             <button onclick="showModal(${task.id})">Edit</button>
//             <button onclick="todoList.deleteTask(${task.id})">Delete</button>
//             </li>`;
//     });
//     ul.innerHTML = output;
//   },

//   completeTask: function (id) {
//     const task = this.tasks.find((task) => task.id === id);
//     if (task) {
//       task.completed = task.completed ? false : true;
//       this.listTasks();
//     }
//   },

//   editTask: function (id, newDescription) {
//     const task = this.tasks.find((task) => task.id === id);
//     if (task) {
//       task.description = newDescription;
//       console.log("Task Updated");
//     }
//   },

//   deleteTask: function (id) {
//     if (confirm("Are you sure to delete?")) {
//       const updatedTasks = this.tasks.filter((task) => task.id != id);
//       this.tasks = updatedTasks;
//       this.listTasks();
//     }
//   },
// };

// todoList.listTasks();

// function addNewTask() {
//   const txtDescription = document.querySelector("#description");
//   todoList.addTask(txtDescription.value);
//   todoList.listTasks();
//   txtDescription.value = "";
// }

// function showModal(id) {
//   const modal = document.querySelector("#modal");
//   modal.classList.add("show");
//   console.log(id);
// }

// function hideModal() {
//   const modal = document.querySelector("#modal");
//   modal.classList.remove("show");
// }
