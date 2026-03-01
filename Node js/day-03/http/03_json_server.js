const http = require("http");

const users = [
  { id: 1, name: "Tutor Joes", role: "Developer" },
  { id: 2, name: "Karthik Rajan", role: "Full Stack Developer" },
  { id: 3, name: "Sneha Iyer", role: "Frontend Developer" },
  { id: 4, name: "Aravind Kumar", role: "Backend Developer" },
  { id: 5, name: "Divya Menon", role: "UI/UX Designer" },
  { id: 6, name: "Surya Prakash", role: "DevOps Engineer" },
  { id: 7, name: "Nithya Rani", role: "QA Engineer" },
  { id: 8, name: "Vigneshwaran M", role: "Mobile Developer" },
  { id: 9, name: "Anjali Nair", role: "Data Analyst" },
  { id: 10, name: "Mohan Babu", role: "Senior Developer" },
  { id: 11, name: "Pooja Reddy", role: "Software Engineer" },
  { id: 12, name: "Ramesh Kannan", role: "Cloud Engineer" },
  { id: 13, name: "Lakshmi Priya", role: "Product Owner" },
  { id: 14, name: "Hariharan S", role: "Security Specialist" },
  { id: 15, name: "Meera Joseph", role: "Database Developer" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  //Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/users" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
