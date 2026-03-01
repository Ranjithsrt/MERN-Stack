const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello Welcome to NodeJs");
});
app.get("/about", (req, res) => {
  res.send("About Us");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
