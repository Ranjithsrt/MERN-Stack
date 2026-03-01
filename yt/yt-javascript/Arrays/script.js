// arrays

let number = [1, 2, 3, 4, 5];

console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);

// map

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num, index) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter

const mynumbers = [1, 2, 3, 4, 5];
const evenNumbers = mynumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce

const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((acc, curr) => acc + curr, 0);
/*
 acc = 0 current val=1 1result = 0 + 1 = 1
 acc = 1 current val=2 2result = 1 + 2 = 3
 acc = 3 current val=3 3result = 3 + 3 = 6
 acc = 6 current val=4 4result = 6 + 4 = 10
 acc = 10 current val=5 5result = 10 + 5 = 15
*/
console.log(sum); // Output: 15

// find

const numbers2 = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers2.find((num) => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// some

const numbers3 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers3.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // Output: true

// every

const numbers4 = [1, 2, 3, 4, 5];
const allEvenNumbers = numbers4.every((num) => num % 2 === 0);
console.log(allEvenNumbers); // Output: false
