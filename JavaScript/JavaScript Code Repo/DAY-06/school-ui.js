function addStudent() {
  const name = document.getElementById("name").value;
  const rollno = document.getElementById("rollno").value;
  let tbody = document.querySelector("tbody");
  const english = Number(document.getElementById("english").value);
  const maths = Number(document.getElementById("maths").value);
  const science = Number(document.getElementById("science").value);
  const social = Number(document.getElementById("social").value);
  const tamil = Number(document.getElementById("tamil").value);

  const total = english + maths + science + social + tamil;
  const average = total / 5;
  let result = "";
  let grade = "";

  if (english >= 35 && maths >= 35 && science >= 35 && social >= 35 && tamil >= 35) {
    result = "Pass";
    if (average >= 90 && average <= 100) {
      grade = "A";
    } else if (average >= 80 && average <= 89) {
      grade = "B";
    } else if (average >= 70 && average <= 79) {
      grade = "C";
    } else {
      grade = "D";
    }
  } else {
    result = "Fail";
    grade = "No Grade";
  }

  let row = `
        <tr>
        <td></td>
        <td>${name}</td>
        <td>${rollno}</td>
        <td>${english}</td>
        <td>${maths}</td>
        <td>${science}</td>
        <td>${social}</td>
        <td>${tamil}</td>
        <td>${total}</td>
        <td>${average}</td>
        <td>${grade}</td>
        <td>${result}</td>
        </tr>
  `;

  tbody.innerHTML += row;

  document.getElementById("name").value = "";
  document.getElementById("rollno").value = "";
  document.getElementById("tamil").value = "";
  document.getElementById("english").value = "";
  document.getElementById("science").value = "";
  document.getElementById("social").value = "";
  document.getElementById("maths").value = "";
}
