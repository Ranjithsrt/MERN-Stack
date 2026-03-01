//Download file from server
const express = require("express");
const path = require("path");
const app = express();
const archiver = require("archiver");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/download-zip", (req, res) => {
  // Zip file name
  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", "attachment; filename=files.zip");

  // Create archive
  const archive = archiver("zip", {
    zlib: { level: 9 }, // compression level
  });

  // Handle errors
  archive.on("error", (err) => {
    res.status(500).send({ erreor: rr.message });
  });

  // Pipe zip data to response
  archive.pipe(res);

  // Add multiple files
  archive.file(path.join(__dirname, "files/girl.jpg"), {
    name: "girl.jpg",
  });
  archive.file(path.join(__dirname, "files/sample.pdf"), {
    name: "sample.pdf",
  });
  // Finalize zip
  archive.finalize();
});

app.listen(3000, () => {
  console.log(`Server Start @ http://localhost:3000`);
});
