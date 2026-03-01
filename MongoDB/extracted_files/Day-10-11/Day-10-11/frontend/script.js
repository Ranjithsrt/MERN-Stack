document.getElementById("studentForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const studentData = {
    name: document.getElementById("name").value,
    age: parseInt(document.getElementById("age").value),
    gender: document.getElementById("gender").value,
    city: document.getElementById("city").value,
    course: document.getElementById("course").value,
  };

  try {
    const response = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });
    const result = await response.json();
    document.getElementById("response").innerText = result.name + " record inserted success.";
    this.reset();
    setTimeout(loadStudents, 200);
  } catch (err) {
    document.getElementById("response").innerText = "Error: " + err.message;
  }
});
const API_URL = "http://localhost:5000/students";

async function loadStudents() {
  try {
    const res = await fetch(API_URL);
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
          </tr>`;
      tbody.innerHTML += row;
    });
  } catch (err) {
    console.error("Error loading students:", err);
  }
}

window.onload = loadStudents;
