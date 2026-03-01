const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/login" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.end("Login Data Received");
    });
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
