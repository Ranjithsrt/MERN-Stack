const API_URL = "http://localhost:5080";

document
  .getElementById("studentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const studentData = {
      name: document.getElementById("name").value,
      age: parseInt(document.getElementById("age").value),
      gender: document.getElementById("gender").value.toLowerCase(),
      city: document.getElementById("city").value,
      course: document.getElementById("course").value,
    };

    try {

      if(document.getElementById("studentId").value){
        // update
         const response = await fetch(`${API_URL}/students/`, {
           method: "PUT",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(studentData),
         });
      }else{
        // insert
      const response = await fetch(`${API_URL}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      });

      const result = await response.json();

      if (!response.ok) {
        document.getElementById("response").innerText =
          "Error: " + result.error;
        return;
      }

      document.getElementById("response").innerText = `${
        result.name || "student"
      } record inserted successfully`;

    }
      this.reset();
      document.getElementById("studentId").value = "";
      setTimeout(loadStudents, 200);
    } catch (err) {
      document.getElementById("response").innerText = "Error: " + err.message;
    }
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
            <td> <button onclick="editStudent(
  '${student._id}',
  '${student.name}',
  '${student.age}',
  '${student.gender}',
  '${student.city}',
  '${student.course}'
)">Edit</button>

               
              <button onclick="deleteStudent('${student._id}')">Delete</button>
            </td>
          </tr>`;
      tbody.innerHTML += row;
    });
  } catch (err) {
    console.error("Error loading students:", err);
  }
}

async function deleteStudent(id) {
  if (!confirm("Are you sure you want to delete this student?")) {
    return;
  }
  try {
    const res = await fetch(`${API_URL}/student/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    document.getElementById("response").innerText = `${
      result.name || "student"
    } record deleted successfully`;

    setTimeout(() => {
      document.getElementById("response").innerText = "";
    }, 5000);
    loadStudents();
  } catch (err) {
    console.error("Error deleting student:", err);
  }
}

// async function editStudent(id) {
//   try {
//     const res = await fetch(`${API_URL}/student/${id}`);
//     const student = await res.json();
//     document.getElementById("name").value = student.name;
//     document.getElementById("age").value = student.age;
//     document.getElementById("gender").value = student.gender;
//     document.getElementById("city").value = student.city;
//     document.getElementById("course").value = student.course;
//   } catch (err) {
//     console.error("Error editing student:", err);
//   }
// }

function editStudent(id, name, age, gender, city, course) {
  document.getElementById("studentId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("age").value = age;
  document.getElementById("gender").value = gender;
  document.getElementById("city").value = city;
  document.getElementById("course").value = course;

  document.getElementById("btnSubmit").innerText = "Update";
}

window.onload = loadStudents;
