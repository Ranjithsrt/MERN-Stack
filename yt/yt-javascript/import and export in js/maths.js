//Named export or inline export

/*
export const add = (a, b) => a + b;

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => a * b;

*/

const add = (a, b) => a + b;

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => a * b;

// group export
export { add, subtract, multiply };
