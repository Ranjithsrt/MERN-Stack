const fs = require("fs");

fs.readdir("./samples", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Async :", files);
});

try {
  const files = fs.readdirSync("./samples");
  console.log("Sync :", files);
} catch (error) {
  console.log(error);
}
