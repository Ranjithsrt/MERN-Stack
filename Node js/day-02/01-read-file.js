const fs = require("fs");

fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Asynchronous : ", data);
});

try {
  const data = fs.readFileSync("./data.txt", "utf8");
  console.log("Synchronous : ", data);
} catch (error) {
  console.log(error);
}

/*
Feature	              fs.readFile (Async)	                 fs.readFileSync (Sync)
Execution	            Non-blocking	                           Blocking
Performance	          Better for I/O-heavy tasks	             Slower, stops execution
Error                 Handling	Callback-based	               Uses try-catch
Use Case	            Large-scale applications, servers	       Simple scripts, small tasks
*/
