const fs = require("fs");
fs.mkdir("./folder2/good", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Folder Created");
});

try {
  fs.mkdirSync("./folder3", { recursive: true });
  console.log("Folder Created");
} catch (error) {
  console.log(error);
}
