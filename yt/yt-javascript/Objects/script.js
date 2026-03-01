// objects

/*

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  eyeColor: "blue",
  "is married": "false",
  // method called function
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// access object values

console.log(person["firstName"]); // dot notation
console.log(person.age); // bracket notation

console.log(person.fullName()); // function call

console.log(person["is married"]);

//console.log(person.is married); // syntax error

// update and adding values

person["firstName"] = "Jane"; // adding new property bracket notation
person.lastName = "Doe"; // adding new property dot notation

person["gender"] = "male"; // adding new property bracket notation
person.country = "USA"; // adding new property dot notation

// delete
delete person["is married"];
console.log(person);

// objects can hold any type of data

const student = {
  name: "John",
  age: 20,
  isStudent: true,
  subjects: ["Math", "Science", "English"],
  marks: [80, 70, 90],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

console.log(student.name); // john
console.log(student["age"]); // 20

console.log(student.marks[1]); // 70
console.log(student.address.city); // new york

// object methods

const keys = Object.keys(student); // name age isStudent subjects marks address
const values = Object.values(student); // john 20 true ["Math", "Science", "English"] [80, 70, 90]
const entries = Object.entries(student);
// [
//   ["name", "John"],
//   ["age", 20],
//   ["isStudent", true],
//   ["subjects", ["Math", "Science", "English"]],
//   ["marks", [80, 70, 90]],
//   ["address", { street: "123 Main St", city: "New York", state: "NY", zip: "10001" }]
// ]

console.log(keys);
console.log(values);
console.log(entries);

// object and array destructuring in js

// array

let numbers = [1, 2, 3, 4, 5];

const a1 = numbers[0];
const b2 = numbers[1];
const c3 = numbers[2];
const d4 = numbers[3];
const e5 = numbers[4];

console.log(a1); // 1
console.log(b2); // 2
console.log(c3); // 3
console.log(d4); // 4
console.log(e5); // 5

let numbers1 = [10, 20, 30, 40, 50, 60];

// array destructuring
const [one, two, three, four, five] = numbers1;

console.log(one); // 10
console.log(two); // 20
console.log(three); // 30
console.log(four); // 40
console.log(five); // 50

// rest operator
const [first, second, ...rest] = numbers;
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50, 60]

// skipping values
const [a, , last] = numbers;
console.log(a); // 10
console.log(last); // 30

// Default values
const [fruit1, fruit2 = "apple", fruit3 = "orange", fruit4 = "no fruit"] = [
  "banana",
];
console.log(fruit1); // "banana"
console.log(fruit2); // "apple"
console.log(fruit3); // "orange"
console.log(fruit4); // "no fruit"

// nested array destructuring

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [[A, M, C], [D, E, F], [G, H, I]] = matrix;

console.log(A, M, C); // 1 2 3
console.log(D, E, F); // 4 5 6
console.log(G, H, I); // 7 8 9

const [row1, row2, row3] = matrix;

console.log(row1); // [1, 2, 3]
console.log(row2); // [4, 5, 6]
console.log(row3); // [7, 8, 9]

// object destructuring

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

//   const name = person.name;
//   const age = person.age;
//   const street = person.address.street;
//   const city = person.address.city;
//   const state = person.address.state;
//   const zip = person.address.zip;

//  console.log(name,age);

// object destructuring

const {
  name,
  age: personAge,
  address: { street, city, state, zip },
  job = "student",
} = person;

console.log(name); // "John"
console.log(age); // 30
console.log(personAge); // 30
console.log(street); // "123 Main St"
console.log(city); // "New York"
console.log(state); // "NY"
console.log(zip); // "10001"
console.log(job); // "student"

// nested

const student1 = {
  id: 1,
  info: {
    Firstname: "John",
    age: 30,
    marks: {
      math: 80,
      science: 70,
      english: 90,
    },
  },
};

const {
  id,
  info: { firstName, age, marks: { math, science, english } },
} = student1;

console.log(id); // 1
console.log(firstName); // "John"
console.log(age); // 30
console.log(marks); // { math: 80, science: 70, english: 90 }
console.log(math); // 80
console.log(science); // 70
console.log(english); // 90

// rest operator
const { id: studentId, ...others } = student1;

console.log(studentId); // 1
console.log(others); // { name: 'John', info: { age: 30, marks: [80, 70, 90], address: { street: '123 Main St', city: 'New York', state: 'NY', zip: '10001' } } }

*/


