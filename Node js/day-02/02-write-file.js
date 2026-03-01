const fs = require("fs");

fs.writeFile("./example1.txt", "This is file 01", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Async File Writtem Successfully");
});

try {
  fs.writeFileSync("./example2.txt", "This is file 02");
  console.log("Sync File Writtem Successfully");
} catch (error) {
  console.log(error);
}
