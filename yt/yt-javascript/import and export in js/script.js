// named import

import { add, subtract as sub, multiply } from "./maths.js";

let x = 10;
let y = 20;

console.log(add(x, y));
console.log(sub(x, y));

// import all

import * as maths from "./maths.js"; // imports everything as an object

console.log(maths.add(x, y));
console.log(maths.subtract(x, y));
console.log(maths.multiply(x, y));

// default export

import formateDate from "./format.js";
console.log(formateDate(new Date()));

import magicDate from "./format.js"; // default export
console.log(magicDate(new Date()));


// export all in one
import hi,{showDate,version} from "./util.js";

hi()
console.log(showDate);
console.log(version);


 