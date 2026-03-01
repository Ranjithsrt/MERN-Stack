const fs = require("fs");

fs.rmdir("./folder3", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Folder Deleted");
});
