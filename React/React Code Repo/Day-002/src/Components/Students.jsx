import React from "react";

const students = [
  { id: 1, name: "Tiya" },
  { id: 2, name: "Tivin" },
  { id: 3, name: "Sara" },
];

const Students = () => {
  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {students.map((student, index) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
