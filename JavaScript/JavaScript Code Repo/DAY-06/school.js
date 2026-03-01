const english = 75;
const maths = 75;
const science = 75;
const social = 75;
const tamil = 75;

const total = english + maths + science + social + tamil;
const average = total / 5;

console.log(`Total   : ${total}`);
console.log(`Average : ${average}`);
if (english >= 35 && maths >= 35 && science >= 35 && social >= 35 && tamil >= 35) {
  console.log(`Result  : Pass`);
  if (average >= 90 && average <= 100) {
    console.log(`Grade   : A`);
  } else if (average >= 80 && average <= 89) {
    console.log(`Grade   : B`);
  } else if (average >= 70 && average <= 79) {
    console.log(`Grade   : C`);
  } else {
    console.log(`Grade   : D`);
  }
} else {
  console.log(`Result  : Fail`);
  console.log(`Grade   : No Grade`);
}

/*
      5 Marks
      Total
      Average
      Pass / Fail >=35
      if Pass grade
        90-100 A
        80-89  B
        70-79  C
        <70    D
      else
      no grade
      */
