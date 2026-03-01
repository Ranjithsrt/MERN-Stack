const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("test.html", (err, data) => {
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
