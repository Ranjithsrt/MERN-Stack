const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  const parsefUrl = url.parse(req.url, true);
  // console.log(parsefUrl);
  const query = parsefUrl.query;
  console.log(query.name);
  console.log(query.age);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

//http://localhost:3000?name=joes&age=12
