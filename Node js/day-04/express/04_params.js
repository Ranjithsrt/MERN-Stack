//params
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Single Params
app.get("/users/:id", (req, res) => {
  console.log(req.params);
  res.send(`User ID is ${req.params.id}`);
});

//Multiple Params
app.get("/users/:id/:name", (req, res) => {
  res.json(req.params);
});

app.listen(3000, () => {
  console.log(`Server Start @ http://localhost:3000`);
});
