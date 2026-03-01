// Student Marks Manager - beginner-friendly CRUD with localStorage
// Validation: marks must be between 0 and 100 (values > 100 will trigger an error)

(() => {
  const STORAGE_KEY = "students_v1";

  // Cached DOM elements
  const form = document.getElementById("student-form");
  const fullNameInput = document.getElementById("fullName");
  const rollInput = document.getElementById("rollNumber");
  const markInputs = [
    document.getElementById("mark1"),
    document.getElementById("mark2"),
    document.getElementById("mark3"),
    document.getElementById("mark4"),
    document.getElementById("mark5"),
  ];
  const submitBtn = document.getElementById("submitBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const tbody = document.getElementById("studentsTbody");
  const searchInput = document.getElementById("searchInput");

  // Stats elements
  const totalStudentsEl = document.getElementById("totalStudents");
  const passedCountEl = document.getElementById("passedCount");
  const failedCountEl = document.getElementById("failedCount");
  const passedPercentEl = document.getElementById("passedPercent");
  const failedPercentEl = document.getElementById("failedPercent");
  const avgPercentEl = document.getElementById("avgPercent");

  // State
  let students = []; // array of student objects
  let editingIndex = -1; // -1 means creating new

  // --- Storage helpers ---
  function loadStudents() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      students = raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to load students from localStorage", e);
      students = [];
    }
  }

  function saveStudents() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }

  // --- Validation ---
  function validateStudentData({ name, roll, marks }) {
    if (!name || !name.trim()) throw new Error("Full name is required");
    if (!roll || !roll.trim()) throw new Error("Roll number is required");

    // marks must be numbers between 0 and 100 (reject >100)
    for (let i = 0; i < marks.length; i++) {
      const m = Number(marks[i]);
      if (Number.isNaN(m)) throw new Error(`Mark ${i + 1} must be a number`);
      if (m < 0) throw new Error(`Mark ${i + 1} cannot be negative`);
      if (m > 100) throw new Error(`Mark ${i + 1} cannot be greater than 100`);
    }

    // Roll number uniqueness (when adding new). If editing, allow same roll for same record.
    const duplicateIndex = students.findIndex((s) => s.roll === roll);
    if (duplicateIndex !== -1 && duplicateIndex !== editingIndex) {
      throw new Error("Roll number already exists");
    }
  }

  // --- Utilities ---
  function calculateTotal(marks) {
    return marks.reduce((a, b) => a + Number(b), 0);
  }

  function calculatePercentage(total) {
    // 5 subjects, each out of 100
    return (total / (5 * 100)) * 100;
  }

  // --- Pass/Fail rule ---
  // A student passes only if every subject mark is >= 35.
  function isPassByMarks(marks) {
    // marks may be strings or numbers; ensure numeric compare
    return marks.every((m) => Number(m) >= 35);
  }

  function resultFromMarks(marks) {
    return isPassByMarks(marks) ? "Pass" : "Fail";
  }

  function clearForm() {
    // Reset form fields that are inside the <form>
    form.reset();
    editingIndex = -1;
    submitBtn.textContent = "Add Student";
    cancelBtn.classList.add("hidden");
  }

  // --- CRUD operations ---
  function addStudent(student) {
    students.push(student);
    saveStudents();
    renderTable();
    clearForm();
    alert("Student added");
  }

  function updateStudent(index, student) {
    students[index] = student;
    saveStudents();
    renderTable();
    clearForm();
    alert("Student updated");
  }

  function deleteStudent(index) {
    if (!confirm("Delete this student?")) return;
    students.splice(index, 1);
    saveStudents();
    renderTable();
  }

  // --- Rendering ---
  function renderTable(filter = "") {
    const f = String(filter).trim().toLowerCase();
    const rows = [];

    // totalPercentSum was previously used inconsistently with filtered rows.
    // We'll compute per-row pass for rendering, and compute overall stats from the full students array
    let passed = 0; // number of passed students among rendered rows (not used for overall stats)
    let matchedCount = 0; // number of rows matching the current filter

    students.forEach((s, idx) => {
      const matches =
        !f ||
        s.name.toLowerCase().includes(f) ||
        String(s.roll).toLowerCase().includes(f);
      if (!matches) return;

      const total = calculateTotal(s.marks);
      const percent = calculatePercentage(total);
      matchedCount++;
      const pass = isPassByMarks(s.marks);

      const tr = `
				<tr class="hover:bg-gray-50">
					<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${escapeHtml(
            s.name
          )}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escapeHtml(
            s.roll
          )}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escapeHtml(
            s.marks[0]
          )}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escapeHtml(
            s.marks[1]
          )}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escapeHtml(
            s.marks[2]
          )}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escapeHtml(
            s.marks[3]
          )}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${escapeHtml(
            s.marks[4]
          )}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${total}</td>
					<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${percent.toFixed(
            2
          )}%</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              pass ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }">${resultFromMarks(s.marks)}</span>
          </td>
					<td class="px-6 py-4 whitespace-nowrap text-sm">
						<button data-index="${idx}" class="editBtn text-blue-600 hover:underline mr-2">Edit</button>
						<button data-index="${idx}" class="deleteBtn text-red-600 hover:underline">Delete</button>
					</td>
				</tr>
			`;
      rows.push(tr);
    });

    tbody.innerHTML =
      rows.join("") ||
      '<tr><td colspan="11" class="px-6 py-4 text-center text-gray-500">No records</td></tr>';

    // Compute overall stats from all students (so stats don't change unexpectedly when filtering)
    const totalStudents = students.length;
    const overallPassed = students.reduce(
      (acc, s) => acc + (isPassByMarks(s.marks) ? 1 : 0),
      0
    );
    const overallFailed = totalStudents - overallPassed;
    const overallAvgPercent = totalStudents
      ? students.reduce(
          (acc, s) => acc + calculatePercentage(calculateTotal(s.marks)),
          0
        ) / totalStudents
      : 0;

    totalStudentsEl.textContent = String(totalStudents);
    passedCountEl.textContent = String(overallPassed);
    failedCountEl.textContent = String(overallFailed);
    passedPercentEl.textContent = `(${
      totalStudents ? Math.round((overallPassed / totalStudents) * 100) : 0
    }%)`;
    failedPercentEl.textContent = `(${
      totalStudents ? Math.round((overallFailed / totalStudents) * 100) : 0
    }%)`;
    avgPercentEl.textContent = `${overallAvgPercent.toFixed(2)}%`;
  }

  // Escape HTML to avoid injection when inserting into table
  function escapeHtml(unsafe) {
    return String(unsafe)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // --- Event handlers ---
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
      name: fullNameInput.value.trim(),
      roll: rollInput.value.trim(),
      marks: markInputs.map((i) => i.value.trim()),
    };

    try {
      validateStudentData(student);

      const total = calculateTotal(student.marks);
      const percent = calculatePercentage(total);

      const record = {
        name: student.name,
        roll: student.roll,
        marks: student.marks.map(Number),
        total,
        percent,
      };

      if (editingIndex === -1) {
        addStudent(record);
      } else {
        updateStudent(editingIndex, record);
      }
    } catch (err) {
      alert(err.message || "Validation error");
    }
  });

  cancelBtn.addEventListener("click", () => {
    clearForm();
  });

  // Delegate edit/delete buttons
  tbody.addEventListener("click", (e) => {
    const editBtn = e.target.closest(".editBtn");
    const deleteBtn = e.target.closest(".deleteBtn");
    if (editBtn) {
      const idx = Number(editBtn.dataset.index);
      startEdit(idx);
      return;
    }
    if (deleteBtn) {
      const idx = Number(deleteBtn.dataset.index);
      deleteStudent(idx);
      return;
    }
  });

  searchInput.addEventListener("input", () => {
    renderTable(searchInput.value);
  });

  function startEdit(index) {
    const s = students[index];
    if (!s) return;
    editingIndex = index;
    fullNameInput.value = s.name;
    rollInput.value = s.roll;
    for (let i = 0; i < 5; i++) markInputs[i].value = s.marks[i];
    submitBtn.textContent = "Save Changes";
    cancelBtn.classList.remove("hidden");
    // Scroll to form for convenience
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Init ---
  loadStudents();
  renderTable();
})();
