//  <script>
//     let editIndex = null;

//     // Load student list to table
//     function loadData() {
//       let studentList = JSON.parse(localStorage.getItem("studentList")) || [];
//       let StdTableBody = document.getElementById("StdTableBody");
//       StdTableBody.innerHTML = "";

//       studentList.forEach((student, index) => {
//         let row = `
//           <tr>
//             <td>${student.name}</td>
//             <td>${student.rollNo}</td>
//             <td>${student.marks[0]}</td>
//             <td>${student.marks[1]}</td>
//             <td>${student.marks[2]}</td>
//             <td>${student.marks[3]}</td>
//             <td>${student.marks[4]}</td>
//             <td>${student.total}</td>
//             <td>${student.percentage}%</td>
//             <td>${student.result}</td>
//             <td><button onclick="editStudent(${index})">Edit</button></td>
//             <td><button onclick="deleteStudent(${index})">Delete</button></td>
//           </tr>`;
//         StdTableBody.innerHTML += row;
//       });

//       updateStats(); // ✅ update total, pass, fail, average
//     }

//     // Save new or updated student
//     function saveData() {
//       const StdName = document.getElementById("StdName").value.trim();
//       const StdRollNo = document.getElementById("StdRollNo").value.trim();
//       const marks = [
//         document.getElementById("StdMark1").value.trim(),
//         document.getElementById("StdMark2").value.trim(),
//         document.getElementById("StdMark3").value.trim(),
//         document.getElementById("StdMark4").value.trim(),
//         document.getElementById("StdMark5").value.trim(),
//       ].map(Number);

//       const ErrorMsg = document.getElementById("ErrorMsg");

//       if (!StdName || !StdRollNo || marks.some(isNaN)) {
//         ErrorMsg.textContent = "⚠️ Please fill all fields with valid numbers";
//         ErrorMsg.style.color = "orange";
//         return;
//       }

//       if (marks.some((m) => m < 0 || m > 100)) {
//         ErrorMsg.textContent = "⚠️ Marks must be between 0 and 100";
//         ErrorMsg.style.color = "orange";
//         return;
//       }

//       const total = marks.reduce((a, b) => a + b, 0);
//       const percentage = Number(((total / 500) * 100).toFixed(2));
//       const result = marks.some((m) => m < 35) ? "Fail" : "Pass";

//       const student = { name: StdName, rollNo: StdRollNo, marks, total, percentage, result };

//       let studentList = JSON.parse(localStorage.getItem("studentList")) || [];
//       if (editIndex !== null) studentList[editIndex] = student;
//       else studentList.push(student);

//       localStorage.setItem("studentList", JSON.stringify(studentList));
//       restForm();
//       loadData();
//       alert(editIndex !== null ? "Student updated!" : "Student added!");
//     }

//     // Clear input form
//     function restForm() {
//       document.querySelectorAll("input").forEach((i) => (i.value = ""));
//       document.getElementById("ErrorMsg").textContent = "";
//       document.getElementById("AddBtn").textContent = "Add Student";
//       editIndex = null;
//     }

//     // Edit student
//     function editStudent(index) {
//       const studentList = JSON.parse(localStorage.getItem("studentList")) || [];
//       const s = studentList[index];

//       document.getElementById("StdName").value = s.name;
//       document.getElementById("StdRollNo").value = s.rollNo;
//       document.getElementById("StdMark1").value = s.marks[0];
//       document.getElementById("StdMark2").value = s.marks[1];
//       document.getElementById("StdMark3").value = s.marks[2];
//       document.getElementById("StdMark4").value = s.marks[3];
//       document.getElementById("StdMark5").value = s.marks[4];

//       document.getElementById("AddBtn").textContent = "Update Student";
//       editIndex = index;
//     }

//     // Delete student
//     function deleteStudent(index) {
//       let studentList = JSON.parse(localStorage.getItem("studentList")) || [];
//       studentList.splice(index, 1);
//       localStorage.setItem("studentList", JSON.stringify(studentList));
//       loadData();
//       alert("Student deleted!");
//     }

//     // Update stats (Total, Passed, Failed, Average)
//     function updateStats() {
//       let studentList = JSON.parse(localStorage.getItem("studentList")) || [];
//       const total = studentList.length;
//       const passed = studentList.filter((s) => s.result === "Pass").length;
//       const failed = studentList.filter((s) => s.result === "Fail").length;
//       const avg =
//         total > 0
//           ? (studentList.reduce((a, s) => a + s.percentage, 0) / total).toFixed(2)
//           : 0;

//       document.getElementById("StdTot").textContent = total;
//       document.getElementById("StdPass").textContent = passed;
//       document.getElementById("StdFail").textContent = failed;
//       document.getElementById("StdAvg").textContent = avg;
//       document.getElementById("StdPerc").textContent = `(${((passed / (total || 1)) * 100).toFixed(1)}%)`;
//       document.getElementById("StdFailPerc").textContent = `(${((failed / (total || 1)) * 100).toFixed(1)}%)`;
//     }

//     // Initialize
//     loadData();
//   </script>