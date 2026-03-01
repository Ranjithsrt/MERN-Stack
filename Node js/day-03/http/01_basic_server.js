const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World from Tutor Joes");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000"); //127.0.0.1:3000
});
