const fs = require("fs");

fs.unlink("./samples/file1.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Async : File Deleted");
});

try {
  fs.unlinkSync("./samples/file2.txt");
  console.log("File Deleted");
} catch (error) {
  console.log(error);
}
