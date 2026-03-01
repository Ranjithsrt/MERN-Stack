 const API_URL = "http://localhost:5080";

 document
   .getElementById("studentForm")
   .addEventListener("submit", async function (e) {
     e.preventDefault();

     const studentData = {
       name: document.getElementById("name").value,
       age: parseInt(document.getElementById("age").value),
       gender: document.getElementById("gender").value,
       city: document.getElementById("city").value,
       course: document.getElementById("course").value,
     };
     const id = document.getElementById("studentId").value;
     try {
       if (id) {
         //Update
         const response = await fetch(`${API_URL}/student/${id}`, {
           method: "PUT",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(studentData),
         });
         const result = await response.json();
         document.getElementById("response").innerText =
           result.name + " record Updated success.";
       } else {
         const response = await fetch(`${API_URL}/students`, {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(studentData),
         });
         const result = await response.json();
         document.getElementById("response").innerText =
           result.name + " record inserted success.";
       }
       this.reset();
       document.getElementById("studentId").value = "";
       setTimeout(loadStudents, 200);
     } catch (err) {
       document.getElementById("response").innerText = "Error: " + err.message;
     }
     document.getElementById("btnSubmit").textContent = "Add Student";
   });

 async function loadStudents() {
   try {
     const res = await fetch(`${API_URL}/students`);
     const students = await res.json();
     // console.log(students);
     const tbody = document.querySelector("#studentTable tbody");
     tbody.innerHTML = "";
     students.forEach((student) => {
       const row = `<tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.city}</td>
            <td>${student.course}</td>
            <td><button class='action-btn edit-btn' onclick="editStudent('${student._id}', '${student.name}', ${student.age}, '${student.gender}', '${student.city}', '${student.course}')">Edit</button></td>
            <td><button class='action-btn delete-btn' onclick="deleteStudent('${student._id}')">Delete</button></td>
          </tr>`;
       tbody.innerHTML += row;
     });
   } catch (err) {
     console.error("Error loading students:", err);
   }
 }

 //Delete Student
 async function deleteStudent(id) {
   if (!confirm("Are you sure you want to delete this student?")) return;

   try {
     const response = await fetch(`${API_URL}/student/${id}`, {
       method: "DELETE",
     });
     const result = await response.json();
     console.log(result);
     document.getElementById("response").innerHTML = result.message;
     setTimeout(() => {
       document.getElementById("response").innerHTML = "";
     }, 2000);
     loadStudents();
   } catch (err) {
     console.error("Error in deleting student : ", err);
   }
 }

 function editStudent(id, name, age, gender, city, course) {
   document.getElementById("studentId").value = id;
   document.getElementById("name").value = name;
   document.getElementById("age").value = age;
   document.getElementById("gender").value = gender;
   document.getElementById("city").value = city;
   document.getElementById("course").value = course;
   document.getElementById("btnSubmit").textContent = "Update Student";
 }

 window.onload = loadStudents;
