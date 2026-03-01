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
    document.getElementById("response").innerText = JSON.stringify(result);
  } catch (err) {
    document.getElementById("response").innerText = "Error: " + err.message;
  }
});
