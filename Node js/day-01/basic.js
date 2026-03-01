console.log("Hi welcome to NodeJs");
//console.log(global);

/*
Feature           JavaScript in the Browser     Node.js
Global Object     window                       global
DOM Access        Yes (can change HTML/CSS)    No (no document or window)
File System       No (for security reasons)    Yes (can read/write files via fs)
Operating System  Very limited access          Full access (CPU Memory OS info)
Modules           ES Modules (import/export)   CommonJS (require) & ES Modules
Purpose           UI/UX and user interaction    Data processing and server logic
*/

//ES6 Module
/*
import { format } from "date-fns";
console.log(new Date());
console.log(format(new Date(), "dd-MM-yyyy"));
*/

const dateFuns = require("date-fns");
console.log(new Date());
console.log(dateFuns.format(new Date(), "dd-MM-yyyy"));
