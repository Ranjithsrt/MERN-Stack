/* 

 Task 1 - JavaScript Exercises (Arithmetic Operations, Variables, Data Types, Input/Output)

*/

/*


1 . Ramesh's basic salary is input through the keyboard. His dearness allowance is 40% of basic salary and house rent allowance is 20% of basic salary. Write a program to calculate his gross salary.



let BasicSalary = parseFloat(prompt("Enter your Basic salary"));

let DearnessAllowance = (40 / 100) * BasicSalary;

let HouseRentAllowance = (20 / 100) * BasicSalary;

let GrossSalary = BasicSalary + DearnessAllowance + HouseRentAllowance;


console.log("GrossSalary", GrossSalary);

*/

/*

2 . The distance between two cities (in km.) is input through the keyboard. Write a program to convert and print this distance in meters, feet, inches and centimeters.

a . meters = k * 1000
b . feet = k * 3280.84
c . inches = k * 39370
d . cm = k * 100000



let km = parseFloat(prompt("Enter the distance"));

let Meters = km * 1000;

let Feet = km * 3280.84 ;

let Inches = km * 39370 ;

let Centimeters = km * 100000 ;

console.log("Meters", Meters);
console.log("Feet", Feet);
console.log("Inches", Inches);
console.log("Centimeters", Centimeters);

*/

/* 

3 . 

if the marks obtained by a student in five subjects are input through keyboard, find out the aggregate marks and percentage marks obtained by the student. Assume that the maximum marks that can be obtained by a student in  each subject is 100.


 let s1 = parseFloat(prompt("Enter marks for Subject 1:"));
 let s2 = parseFloat(prompt("Enter marks for Subject 2:"));
 let s3 = parseFloat(prompt("Enter marks for Subject 3:"));
 let s4 = parseFloat(prompt("Enter marks for Subject 4:"));
 let s5 = parseFloat(prompt("Enter marks for Subject 5:"));

 let totalMarks = s1 + s2 + s3 + s4 + s5;
 let percentage = (totalMarks / 500) * 100;

 console.log("Total Marks:", totalMarks);
 console.log("Percentage:", percentage + "%");

 */

/*
 4 Temperature of a city in Fahrenheit degrees is input through the keyboard. Write a program to convert this temperature into Centigrade degrees. (F − 32) × 5/9 

 celsius to fahrenheit conversion :

 fahrenheit = (celsius * 9) / 5 + 32;


 fahrenheit to celsius conversion :

 celsius = (fahrenheit - 32) * 5 / 9;


  let Fahrenheit =Number(prompt("Enter the temperature in Fahrenheit"));
  let Centigrade = (Fahrenheit - 32) * 5 / 9;
  console.log("Centigrade", Centigrade.toFixed(3));

*/

/*
5 The length & breadth of a rectangle and radius of a circle are input through the keyboard. Write a program to calculate the area & perimeter of the rectangle, and the area & circumference of the circle       l*b    2(l+b)      πr2      2πr  



let length = parseFloat(prompt("Enter the length of the rectangle:"));
let breadth = parseFloat(prompt("Enter the breadth of the rectangle:"));
let radius = parseFloat(prompt("Enter the radius of the circle:"));

let areaRectangle = length * breadth;
let perimeterRectangle = 2 * (length + breadth);
let areaCircle = 3.14 * radius * radius;
let circumferenceCircle = 2 * 3.14 * radius;

console.log("Area of Rectangle:", areaRectangle);
console.log("Perimeter of Rectangle:", perimeterRectangle);
console.log("Area of Circle:", areaCircle);
console.log("Circumference of Circle:", circumferenceCircle);

*/

/*

6 Two numbers are input through the keyboard into two locations C and D. Write a program to
interchange the contents of C and D.


let c = 10;
let d = 20;
console.log("Before swapping: c =", c, "d =", d);

let temp = c;
c = d;
d = temp;

console.log("After swapping: c =", c, "d =", d);


*/

/*

7 If a five-digit number is input through the keyboard, write a program to calculate the sum of
its digits. (Hint: Use the modulus operator ‘%’)


*/

/*


8. If a five-digit number is input through the keyboard, write a program to reverse the number.



let number = prompt("Enter a five-digit number:");
let reverse = number.split("").reverse().join("");
console.log("Reversed number: " + reverse);



*/

/*

9 If a four-digit number is input through the keyboard, write a program to obtain the sum of the
first and last digit of this number.



let number = Number(prompt("Enter a four-digit number:"));

let lastDigit = number % 10;
let firstDigit = Math.floor(number / 1000);
let sum = firstDigit + lastDigit;

console.log("The sum of the first and last digits is:", sum);
console.log("The sum of the first digit is:", firstDigit);
console.log("The sum of the last digit is:", lastDigit);

*/

/*



10. In a town, the percentage of men is 52. The percentage of total literacy is 48. If total
percentage of literate men is 35 of the total population, write a program to find the total
number of illiterate men and women if the population of the town is 80,000.










*/

/*



11. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be
withdrawn is input through the keyboard in hundreds, find the total number of currency
notes of each denomination the cashier will have to give to the withdrawer.//Rs.1575 =&gt;
100*15,50*1,10*2,5







*/

/*



 
12. If the total selling price of 15 items and the total profit earned on them is input through the
keyboard, write a program to find the cost price of one item.






*/

/*


 13. If a five-digit number is input through the keyboard, write a program to print a new number
by adding one to each of its digits. For example, if the number that is input is 12391 then the
output should be displayed as 23402.




*/

/* ***********-----------------------*****************-------------***********------*/

/*

Task - 2  Exercises (if if else nested if else switch case)

1 while purchasing certain items, a discount of 10% is offered if the quantity purchased is more than 1000. If quantity and price per item are input through the keyboard, write a program to calculate the total expenses.

let quantity = 1200;
let pricePerItem = 5;

total = quantity * pricePerItem;

if (quantity > 1000) {
  10/ 100 = 0.1
  6000* 0.1 = 600

  total = total - total * 0.1; // Applying 10% discount

  discount = total * 0.1; // 10% discount
  total = discount-total; // Subtracting discount from total
}

console.log("Total before discount: ", total);

*/

/* 

2 The current year and the year in which the employee joined the organization are entered through the keyboard. If the number of years for which the employee has served the organization is greater than 3 then a bonus of Rs. 2500/- is given to the employee. If the years of service are not greater than 3, then the program should do nothing.


let currentYear = 2023;
let joiningYear = 2018;

let yearsOfService = currentYear - joiningYear;

if (yearsOfService > 3) {
  let bonus = 2500;
  console.log("Bonus for the employee is: Rs.", bonus);
}else{
  console.log("No bonus for the employee.");
}



*/

/*

3 If his basic salary is less than Rs. 1500, then HRA = 10% of basic salary and DA = 90% of basic salary. If his salary is either equal to or above Rs. 1500, then HRA = Rs. 500 and DA = 98% of basic salary. If the employee's salary is input through the keyboard write a program to find his gross salary



let basic = 1500;

if (basic < 1500) {
  hra = basic * (10 / 100);
  da = basic * (90 / 100);
} else if (basic >= 1500 && basic < 2000) {
  hra = 500;
  da = basic * 0.98;
}

let grossSalary = basic + hra + da;
console.log("Gross Salary:", grossSalary);
console.log("HRA:", hra);
console.log("DA:", da);


*/

/*


4 The marks obtained by a student in 5 different subjects are input through the keyboard. The student gets a division as per the following rules: Write a program to calculate the division obtained by the student.

     a.Percentage above or equal to 60 - First division 
     b.Percentage between 50 and 59 - Second division 
     c.Percentage between 40 and 49 - Third division 
     d.Percentage less than 40 – Fail



let m1= 80
let m2= 80
let m3= 82 
let m4= 80
let m5= 100

let totalMarks = m1 + m2 + m3 + m4 + m5;
let percentage = (totalMarks / 500) * 100;

if (percentage >= 60) {
  console.log("First Division");
}
else if (percentage >= 50 && percentage < 60) {
  console.log("Second Division");
} 
else if (percentage >= 40 && percentage < 50) {
  console.log("Third Division");
} 
else {
  console.log("Fail");
}

console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");

*/

/*

5 A company insures its drivers in the following cases:

   a.If the driver is married. 
   b.If the driver is unmarried, male & above 30 years of age. 
   c.If the driver is unmarried, female & above 25 years of age.


let maritalStatus = prompt("Enter marital status (married/unmarried):");
let gender = prompt("Enter gender (male/female):");
let age = Number(prompt("Enter age:"));

let insured = false;

if (maritalStatus === "married") {
  insured = true;
} else if (maritalStatus === "unmarried" && gender === "male" && age > 30) {
  insured = true;
} else if (maritalStatus === "unmarried" && gender === "female" && age > 25) {
  insured = true;
}

if (insured) {
  console.log("The driver is insured.");
}else{
  console.log("The driver is not insured.");
}

*/

/*

6 Write a program to calculate the salary as per the following table: 

Gender   | Years of Service | Qualifications   | Salary
------------------------------------------------------
Male     | >= 10           | Post-Graduate    | 15000
Male     | >= 10           | Graduate         | 10000
Male     | < 10            | Post-Graduate    | 10000
Male     | < 10            | Graduate         |  7000
Female   | >= 10           | Post-Graduate    | 12000
Female   | >= 10           | Graduate         |  9000
Female   | < 10            | Post-Graduate    | 10000
Female   | < 10            | Graduate         |  6000
------------------------------------------------------





let gender = prompt("Enter gender (male/female):").toLowerCase();
let years = Number(prompt("Enter years of service:"));
let qualification = prompt("Enter qualification (graduate/post-graduate):").toLowerCase();

let salary = 0;  

if(gender === "male"){
  if(years >= 10 && qualification === "post-graduate"){
    salary = 15000;
  } else if(years >= 10 && qualification === "graduate"){
    salary = 10000;
  } else if(years < 10 && qualification === "post-graduate"){
    salary = 10000;
  } else if(years < 10 && qualification === "graduate"){
    salary = 7000;
  }
} else if (gender === "female"){
  if(years >= 10 && qualification === "post-graduate"){
    salary = 12000;
  } else if(years >= 10 && qualification === "graduate"){
    salary = 9000;
  } else if(years < 10 && qualification === "post-graduate"){
    salary = 10000;
  } else if(years < 10 && qualification === "graduate"){
    salary = 6000;
  }
}

if (salary > 0) {
  console.log("The salary is: Rs.", salary);
}else{
  console.log("Invalid input");
  
}


*/

/*

7 If cost price and selling price of an item is input through the keyboard, write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred.


*/

/*

8 Any integer is input through the keyboard. Write a program to find out whether it is an odd number or even number. (Hint: Use the % (modulus) operator) 


let num = Number(prompt("Enter an integer:"));

 if (num % 2 === 0) {
   console.log(num + " is Even");
   
} else {
   console.log(num + " is Odd");
}

*/

/*

9  A five-digit number is entered through the keyboard. Write a program to obtain the reversed number and to determine whether the original and reversed numbers are equal or not. 

*/

/*

10 If the ages of Ram, Shyam and Ajay are input through the keyboard, write a program to determine the youngest of the three. 


let ram = Number(prompt("Enter Ram's age:"));
let shyam = Number(prompt("Enter Shyam's age:"));
let ajay = Number(prompt("Enter Ajay's age:"));

if (ram < shyam && ram < ajay) {
  console.log("Ram is the youngest.");
} else if (shyam < ram && shyam < ajay) {
  console.log("Shyam is the youngest.");
} else if (ajay < ram && ajay < shyam) {
  console.log("Ajay is the youngest.");
} else {
  console.log("All are of the same age.");
}

*/

/*

11 Write a program to check whether a triangle is valid or not, when the three angles of the triangle are entered through the keyboard. A triangle is valid if the sum of all the three angles is equal to 180 degrees. 

let angle1 = Number(prompt("Enter the first angle of the triangle:"));
let angle2 = Number(prompt("Enter the second angle of the triangle:"));
let angle3 = Number(prompt("Enter the third angle of the triangle:"));

let sum = angle1 + angle2 + angle3;

if (sum === 180) {
  console.log("The triangle is valid.");  
}else {
  console.log("The triangle is not valid.");
}

*/

/*

12  Find the absolute value of a number entered through the keyboard. 

 
let num = Number(prompt("Enter a number:"));

let absolute = Math.abs(num);

console.log("Absolute value = " + absolute);


*/

/*

13  Given the length and breadth of a rectangle, write a program to find whether the area of the rectangle is greater than its perimeter. For example, the area of the rectangle with length = 5 and breadth = 4 is greater than its perimeter 

*/

/*

14  Any year is entered through the keyboard, write a program to determine whether the year is leap or not. Use the logical operators && and ||. 


Divisible by 400 →  Leap year

Divisible by 4 and not divisible by 100 →  Leap year

Otherwise →  Not leap year


let year = Number(prompt("Enter a year:"));

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(year + " is a Leap Year ");
} else {
  console.log(year + " is NOT a Leap Year ");
}

*/

/*

15  A certain grade of steel is graded according to the following conditions:

     (i) Hardness must be greater than 50
     (ii) Carbon content must be less than 0.7
     (iii) Tensile strength must be greater than 5600

The grades are as follows:

     Grade is 10 if all three conditions are met
     Grade is 9 if conditions (i) and (ii) are met
     Grade is 8 if conditions (ii) and (iii) are met
     Grade is 7 if conditions (i) and (iii) are met
     Grade is 6 if only one condition is met
     Grade is 5 if none of the conditions are met

Write a program, which will require the user to give values of hardness, carbon content and tensile strength of the steel under consideration and output the grade of the steel.


let hardness = parseFloat(prompt("Enter hardness of steel:"));
let carbon = parseFloat(prompt("Enter carbon content of steel:"));
let tensile = parseFloat(prompt("Enter tensile strength of steel:"));

let cond1 = hardness > 50;
let cond2 = carbon < 0.7;
let cond3 = tensile > 5600;

let grade;

if (cond1 && cond2 && cond3) {
  grade = 10;
} else if (cond1 && cond2) {
  grade = 9;
} else if (cond2 && cond3) {
  grade = 8;
} else if (cond1 && cond3) {
  grade = 7;
} else if (cond1 || cond2 || cond3) {
  grade = 6;
} else {
  grade = 5;
}

alert("The grade of the steel is: " + grade);


*/

/*

16 A library charges a fine for every book returned late. For first 5 days the fine is 50 paise, for 6-10 days fine is one rupee and above 10 days fine is 5 rupees. If you return the book after 30 days your membership will be cancelled. Write a program to accept the number of days the member is late to return the book and display the fine or the appropriate message. 


let daysLate = parseInt(prompt("Enter the number of days the book is returned late:"));

if (daysLate <= 0) {
    alert("No fine. Book returned on time.");
} else if (daysLate <= 5) {
    alert("Fine = 50 paise");
} else if (daysLate <= 10) {
    alert("Fine = 1 rupee");
} else if (daysLate <= 30) {
    alert("Fine = 5 rupees");
} else {
    alert("Membership Cancelled!");
}



*/

/*

17  In a company, worker efficiency is determined on the basis of the time required for a worker to complete a particular job. If the time taken by the worker is between 2 – 3 hours, then the worker is said to be highly efficient. If the time required by the worker is between 3 – 4 hours, then the worker is ordered to improve speed. If the time taken is between 4 – 5 hours, the worker is given training to improve his speed, and if the time taken by the worker is more than 5 hours, then the worker has to leave the company. If the time taken by the worker is input through the keyboard, find the efficiency of the worker. 


*/

let time = parseFloat(prompt("Enter the time taken by the worker (in hours):"));

if (time >= 2 && time < 3) {
  alert("The worker is highly efficient.");
} else if (time >= 3 && time < 4) {
  alert("The worker is ordered to improve speed.");
} else if (time >= 4 && time < 5) {
  alert("The worker is given training to improve speed.");
} else if (time >= 5) {
  alert("The worker has to leave the company.");
} else {
  alert("Invalid input. Time must be 2 hours or more.");
}
