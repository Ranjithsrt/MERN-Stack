//Download file from server
const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Download
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "files", "girl.jpg");
  console.log(filePath);
  res.download(filePath);
});

//Rename File While Downloading
app.get("/download2", (req, res) => {
  const filePath = path.join(__dirname, "files", "girl.jpg");
  console.log(filePath);
  res.download(filePath, "women.jpg");
});

//Download Using Route Params
app.get("/download/:filename", (req, res) => {
  const file = req.params.filename;
  const filePath = path.join(__dirname, "files", file);
  res.download(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

//Download with Headers
app.get("/download3", (req, res) => {
  const filePath = path.join(__dirname, "files", "sample.pdf");
  res.download(filePath, "report.pdf", {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
});

app.listen(3000, () => {
  console.log(`Server Start @ http://localhost:3000`);
});
