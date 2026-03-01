const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("About Page");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("404 Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

/*

Status Code     Description
200              Success      (GET,PUT,DELETE)
201              New data added (POST)
404              Page Not Found
500              Internal Server Error

*/
