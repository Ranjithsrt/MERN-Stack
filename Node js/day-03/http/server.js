const http = require("http");

let users = [
  { id: 1, name: "Joes" },
  { id: 2, name: "Stanley" },
];
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  } else if (req.url === "/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.end("User Added");
    });
  } else if (req.url.startsWith("/users") && req.method === "DELETE") {
    //  /users/2
    const id = parseInt(req.url.split("/")[2]);
    console.log(id);
    users = users.filter((user) => user.id !== id);
    res.end("User Deleted");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
