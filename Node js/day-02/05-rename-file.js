const fs = require("fs");

fs.rename("./samples/append1.txt", "./samples/good.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Async: File Renamed");
});

try {
  fs.renameSync("./samples/append2.txt", "./samples/bad.txt");
  console.log("Sync: File Renamed");
} catch (error) {
  console.log(error);
}
