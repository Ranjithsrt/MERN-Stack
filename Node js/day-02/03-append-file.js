const fs = require("fs");

fs.appendFile("./samples/append1.txt", "\nThis is append text", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("content appended");
});

try {
  fs.appendFileSync("./samples/append1.txt", "\nThis is synchronous append");
  console.log("synchronous content appended");
} catch (error) {
  console.log(error);
}
