-- Day 1

--  create new database
CREATE DATABASE react_class;

-- choose database
USE react_class;

-- create new table
CREATE TABLE students (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50) UNIQUE,
   dob DATE,
   fees DECIMAL(10,2),
   age INT
);

-- show  all database names in mysql server
SHOW DATABASES;

-- show all tables in selected database
SHOW TABLES;

-- insert one new dummy record
INSERT INTO students (name, email, dob, fees, age)
VALUES ('Ranjith', 'ranji@gmail.com', '2000-05-10', 12000.50, 24);

-- insert multiple dummy record
INSERT INTO students (name, email, dob, fees, age) VALUES
('Ak', 'ak@gmail.com', '2001-05-10', 13000.50, 25),
('Sathish', 'sathish99@gmail.com', '1999-03-22', 15000.00, 25),
('Praveen', 'praveen01@gmail.com', '2001-08-14', 11000.75, 23),
('Deepa', 'deepa87@gmail.com', '2000-12-01', 17500.00, 24),
('Karthik', 'karthik77@gmail.com', '1998-07-19', 16000.25, 26),
('Meena', 'meena45@gmail.com', '2002-02-11', 14000.00, 22),
('Arun', 'arun33@gmail.com', '1999-10-05', 15500.50, 25),
('Divya', 'divya55@gmail.com', '2001-04-28', 13000.80, 23),
('Vijay', 'vijay66@gmail.com', '1997-09-15', 18000.00, 27),
('Swathi', 'swathi44@gmail.com', '2000-11-30', 17000.60, 24);

-- show all records in table
SELECT * FROM students;

-- show selected columns only
select id,name,email from students;

-- alias column name
select id `s.no`,name as `full name`, email as `Email Address` from students; 

-- Alter table add gender column
ALTER TABLE students MODIFY gender VARCHAR(45) NULL AFTER name;

-- update record
update students set gender = "female" where id=1 ;
update students set gender = "female" where id=2 ;
update students set gender = "male" where id=3 or id =4 ;
 
-- Check Table Structure
DESCRIBE students;

----------------------------------------------------

-- Day 2


-- Day 2

-- create new table
CREATE TABLE employees(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (100) NOT NULL,
email VARCHAR (100) NOT NULL UNIQUE,
address TEXT,
city VARCHAR(50),
state VARCHAR(50),
country VARCHAR(50) DEFAULT 'india',
date_of_birth DATE,
course VARCHAR(50),
salary DECIMAL(10,2),
gender ENUM('male','female','others')

);

-- list all tables
SHOW TABLES;

-- detailed view of tables
DESCRIBE employees;

-- multiple insert
INSERT INTO employees

(name, email, address, city, state, country, date_of_birth, course, salary, gender)
VALUES
('Arun Kumar', 'arun1@example.com', '12 Gandhi Street', 'Chennai', 'TN', 'India', '1997-05-10', 'Java', 45000.00, 'male'),
('Bala Murugan', 'bala2@example.com', '22 Anna Nagar', 'Madurai', 'TN', 'India', '1995-08-21', 'Python', 52000.00, 'male'),
('Chitra Devi', 'chitra3@example.com', '44 Cross Road', 'Coimbatore', 'TN', 'India', '1998-01-15', 'Web Design', 39000.00, 'female'),
('Divya Rani', 'divya4@example.com', '19 MG Street', 'Salem', 'TN', 'India', '1994-11-11', 'SQL', 48000.00, 'female'),
('Eswar Rao', 'eswar5@example.com', '88 Gandhi Road', 'Hyderabad', 'TS', 'India', '1993-06-18', 'React', 55000.00, 'male'),
('Farooq Ahmed', 'farooq6@example.com', '52 City Center', 'Bengaluru', 'KA', 'India', '1992-02-09', 'NodeJS', 60000.00, 'male'),
('Ganga Priya', 'ganga7@example.com', '10 Health Colony', 'Mysuru', 'KA', 'India', '1996-10-22', 'Java', 43000.00, 'female'),
('Hari Prasad', 'hari8@example.com', '77 Poonamallee', 'Chennai', 'TN', 'India', '1991-03-17', 'Testing', 47000.00, 'male'),
('Indra Priya', 'indra9@example.com', '91 Ring Road', 'Delhi', 'DL', 'India', '1997-09-14', 'C#', 51000.00, 'female'),
('Joseph Raj', 'joseph10@example.com', '12 Holy Road', 'Chennai', 'TN', 'India', '1998-12-30', 'Angular', 54000.00, 'male'),
('Kani Mozhi', 'kani11@example.com', '29 Green Town', 'Chennai', 'TN', 'India', '1999-03-02', 'Java', 39000.00, 'female'),
('Logesh Kumar', 'logesh12@example.com', '55 South Street', 'Coimbatore', 'TN', 'India', '1996-04-28', 'Python', 52000.00, 'male'),
('Manoj Kumar', 'manoj13@example.com', '88 West Road', 'Salem', 'TN', 'India', '1997-08-19', 'PHP', 48000.00, 'male'),
('Nandhini Raj', 'nandhini14@example.com', '100 Lake View', 'Madurai', 'TN', 'India', '1995-01-26', 'JavaScript', 46000.00, 'female'),
('Oviya Devi', 'oviya15@example.com', '4 Gandhi Street', 'Coimbatore', 'TN', 'India', '1994-06-24', 'React', 55000.00, 'female'),
('Prabhu', 'prabhu16@example.com', '2 MG Nagar', 'Chennai', 'TN', 'India', '1993-02-18', 'Cloud', 62000.00, 'male'),
('Qadir Ali', 'qadir17@example.com', '7 Hill View', 'Hyderabad', 'TS', 'India', '1992-10-13', 'Linux', 50000.00, 'male'),
('Rachana Devi', 'rachana18@example.com', '52 Rose Street', 'Delhi', 'DL', 'India', '1996-12-22', 'HR', 35000.00, 'female'),
('Sathish Kumar', 'sathish19@example.com', '33 Lotus Road', 'Chennai', 'TN', 'India', '1998-08-08', 'SQL', 42000.00, 'male'),
('Tamizh Arasi', 'tamil20@example.com', '77 Temple Street', 'Madurai', 'TN', 'India', '1995-11-20', 'AI', 62000.00, 'female'),
('Udhay Kumar', 'udhay21@example.com', '90 Market Street', 'Salem', 'TN', 'India', '1994-10-29', 'DevOps', 64000.00, 'male'),
('Varsha', 'varsha22@example.com', '24 Garden Road', 'Coimbatore', 'TN', 'India', '1993-05-06', 'Networking', 47000.00, 'female'),
('Wasim', 'wasim23@example.com', '70 Mill Street', 'Bengaluru', 'KA', 'India', '1991-02-12', 'AWS', 63000.00, 'male'),
('Xavier', 'xavier24@example.com', '66 Holy Church Road', 'Chennai', 'TN', 'India', '1997-07-17', 'Python', 52000.00, 'male'),
('Yamuna', 'yamuna25@example.com', '100 Krishna nagar', 'Salem', 'TN', 'India', '1996-03-04', 'Testing', 41000.00, 'female'),
('Zakir', 'zakir26@example.com', '13 City Market', 'Hyderabad', 'TS', 'India', '1995-01-29', 'PHP', 46000.00, 'male'),
('Aarthi', 'aarthi27@example.com', '55 Mill gate', 'Chennai', 'TN', 'India', '1996-09-20', 'Web Design', 39000.00, 'female'),
('Balaji', 'balaji28@example.com', '77 MG Nagar', 'Madurai', 'TN', 'India', '1997-11-11', 'C++', 53000.00, 'male'),
('Chandran', 'chandran29@example.com', '1 Central Street', 'Delhi', 'DL', 'India', '1994-02-14', 'Java', 54000.00, 'male'),
('Deepa', 'deepa30@example.com', '9 North Street', 'Coimbatore', 'TN', 'India', '1991-09-09', 'Python', 45000.00, 'female'),
('Elango', 'elango31@example.com', '99 New Street', 'Chennai', 'TN', 'India', '1998-01-05', 'PHP', 46000.00, 'male'),
('Fathima', 'fathima32@example.com', '14 West Nagar', 'Bengaluru', 'KA', 'India', '1995-04-24', 'NodeJS', 62000.00, 'female'),
('Gokul', 'gokul33@example.com', '12 Ring Road', 'Madurai', 'TN', 'India', '1993-12-19', 'JavaScript', 48000.00, 'male'),
('Harini', 'harini34@example.com', '23 River Street', 'Coimbatore', 'TN', 'India', '1997-07-14', 'Angular', 55000.00, 'female'),
('Ilayaraja', 'ilaya35@example.com', '77 KK Road', 'Salem', 'TN', 'India', '1992-03-13', 'DevOps', 62000.00, 'male'),
('Janani', 'janani36@example.com', '6 Lake View', 'Chennai', 'TN', 'India', '1996-04-18', 'Java', 45000.00, 'female'),
('Karthik', 'karthik37@example.com', '44 East Street', 'Madurai', 'TN', 'India', '1993-01-21', 'React', 53000.00, 'male'),
('Lavanya', 'lavanya38@example.com', '19 Flower Road', 'Salem', 'TN', 'India', '1998-05-23', 'Cloud', 61000.00, 'female'),
('Magesh', 'magesh39@example.com', '87 Cross Street', 'Chennai', 'TN', 'India', '1994-10-14', 'AWS', 64000.00, 'male'),
('Nirmala', 'nirmala40@example.com', '90 Temple Road', 'Coimbatore', 'TN', 'India', '1992-11-30', 'Testing', 42000.00, 'female'),
('Om Prakash', 'om41@example.com', '18 Main Road', 'Delhi', 'DL', 'India', '1995-06-11', 'SQL', 47000.00, 'male'),
('Pooja', 'pooja42@example.com', '3 Lake Colony', 'Chennai', 'TN', 'India', '1997-08-04', 'Java', 48000.00, 'female'),
('Quresh', 'quresh43@example.com', '72 River Town', 'Hyderabad', 'TS', 'India', '1991-12-19', 'Linux', 50000.00, 'male'),
('Raju', 'raju44@example.com', '33 South Road', 'Bengaluru', 'KA', 'India', '1998-09-30', 'Networking', 45000.00, 'male'),
('Selvi', 'selvi45@example.com', '200 Temple Road', 'Madurai', 'TN', 'India', '1996-05-09', 'C#', 48000.00, 'female'),
('Thiru', 'thiru46@example.com', '11 Gandhi Nagar', 'Coimbatore', 'TN', 'India', '1994-03-22', 'Python', 52000.00, 'male'),
('Usha', 'usha47@example.com', '17 East Main', 'Chennai', 'TN', 'India', '1998-07-03', 'HR', 35000.00, 'female'),
('Vijay', 'vijay48@example.com', '81 Market lane', 'Salem', 'TN', 'India', '1996-11-29', 'JavaScript', 53000.00, 'male'),
('Yogesh', 'yogesh49@example.com', '8 Lake road', 'Chennai', 'TN', 'India', '1993-12-12', 'Angular', 54000.00, 'male'),
('Zara', 'zara50@example.com', '71 MG Street', 'Delhi', 'DL', 'India', '1997-04-04', 'AI', 65000.00, 'female');


SELECT name,salary FROM employees;

SELECT name,salary FROM employees ORDER BY salary ASC;

SELECT name,salary FROM employees ORDER BY salary DESC;

SELECT * FROM employees WHERE city = 'chennai';

SELECT state FROM employees ;

SELECT DISTINCT state FROM employees ;

SELECT * FROM employees WHERE salary > 60000;
 
SELECT * FROM employees WHERE salary > 60000 AND gender = "female";
  
SELECT * FROM employees WHERE city = 'Delhi' OR city = 'Chennai';

SELECT * FROM employees WHERE course = 'java' OR course = 'Cloud' OR course = "C#";

SELECT * FROM employees WHERE course IN ("C","java","python");

SELECT * FROM employees WHERE course NOT IN ("C","java","python");

SELECT name,salary FROM employees WHERE salary>=40000  AND  salary<=60000  ;

SELECT name,salary FROM employees WHERE salary BETWEEN 40000  AND 60000  ;

SELECT name, date_of_birth FROM employees WHERE date_of_birth BETWEEN '1997-01-01' AND '1997-12-31'  ;


SELECT * FROM employees WHERE address IS NULL;

SELECT * FROM employees WHERE address IS NOT NULL;

update employees set address="25 CBE" where id =2;

update employees set address="25 CBE" , state = "TN" where id =2;


SELECT * FROM employees;

DROP TABLE employees;


----------------------------------------------------------

-- Day -3

-- limits

SELECT * FROM employees limit 5;
SELECT * FROM employees limit 5 offset 5;
SELECT * FROM employees limit 5 offset 10;
SELECT * FROM employees limit 5,15;

SELECT * FROM employees order by id desc limit 5;
SELECT * FROM employees order by id desc limit 5,10;

-- pagination exampl

-- page 1
SELECT * FROM employees limit 10 offset 0;

-- page 2
SELECT * FROM employees limit 10 offset 10;

-- page 3
SELECT * FROM employees limit 10 offset 20;

-- rename table

-- syntax

show tables;

RENAME table students to users ;

-- rename multiple tables

RENAME TABLE users TO students, employees TO staffs;

rename table student to students ,staff to employees;

RENAME TABLE staffs TO employees;
RENAME TABLE student TO students ;

-- add new column

alter table employees add column ph varchar(25);

describe employees ;

alter table employees 
add column father_name varchar(50) after name,
add column mother_name varchar(50) after father_name;

-- drop single column
alter table employees 
drop column mother_name ;

-- drop multiple column
alter table employees 
drop column mother_name,
drop column father_name ;


----------------------------------------------------

-- Day 4  

-- string functions 

SHOW DATABASES ;

USE react_class ;

-- 1 concatenate two or more strings

SELECT CONCAT ('MERN',' ','STACK') AS result;
SELECT CONCAT(name,' - ',city) AS result FROM employees;
SELECT CONCAT('Name : ', name ,' - City : ' , city ) AS result FROM employees;

-- Extract a substring from a string 
SELECT SUBSTRING('mysql tutorial',1,5) AS result;
SELECT SUBSTRING(name,1,3) AS result FROM employees;
SELECT CONCAT(SUBSTRING(name,1,3), '@ranjith.in') AS company_email FROM employees;

-- to change case to lowercase 
SELECT CONCAT(SUBSTRING(LOWER(name),1,3), '@ranjith.in') AS company_email FROM employees;
SELECT CONCAT(SUBSTRING(LOWER(name),1,3), '@ranjith.in') AS company_email FROM employees;
 SELECT LOWER('mysql tutorial') AS result;
 -- to change case to uppercase 
 SELECT UPPER('mysql tutorial') AS result;
 
-- get the length of string
SELECT LENGTH('mysql') AS result;
SELECT LENGTH('  mysql  ') AS result;

-- trim is to remove leading and trailing spaces
SELECT LENGTH(TRIM(' mysql tutorial ')) AS result;

-- Math function 

-- abs

SELECT ABS(-10) AS result;
SELECT ABS(100) AS result;

-- round a number a specified number of decimal placed

SELECT ROUND(3.14578,2) AS result;

-- ceil
SELECT CEIL(3.14578) AS result;

-- floor
SELECT FLOOR(3.14578) AS result;

-- power

-- ceil
SELECT POWER(2,3) AS result;

-- aggregate function

-- count
SELECT COUNT(*)  FROM employees;

-- sum
SELECT SUM(salary)AS total_salary FROM employees;
SELECT SUM(salary)/COUNT(*) AS avg_salary FROM employees;

-- avg
SELECT AVG(salary) AS avg_salary FROM employees;

-- max 
SELECT MAX(salary) AS max_salary FROM employees;

-- min
SELECT MIN(salary) AS min_salary FROM employees;


-- control flow fuction for conditional logic

-- if :
SELECT name,salary FROM employees;
SELECT name ,salary,(IF(salary>=60000,'High','Low')) AS salary_status FROM employees;


-- case : more complex conditional logic

SELECT
 name,
 salary,
 CASE
   WHEN salary >= 60000 THEN 'high'
   WHEN salary >= 45000 THEN 'medium'
   ELSE 'low'
 END
 AS salary_status FROM employees;
 
 -- json functions
 
SELECT JSON_EXTRACT(
  '{
    "name": "ranjith kumar",
    "age": 50,
    "city": "covai"
  }', '$.name'
) AS Name;


SELECT JSON_EXTRACT(
  '{
    "name": "ranjith kumar",
    "age": 50,
    "city": "covai"
  }', '$.age'
) AS age;


SELECT JSON_EXTRACT(
  '{
    "name": "ranjith kumar",
    "age": 50,
    "city": "covai"
  }', '$.city'
) AS city;

SELECT JSON_ARRAY('a','b','c') AS alphabets;

SELECT COALESCE(NULL,'joes') AS result;

SELECT name,email, COALESCE(address,'not provided') FROM  employees ;

SELECT name,email, COALESCE(address,'not provided') FROM  employees WHERE id>27;

SELECT name,email, IFNULL(address,'not provided') FROM  employees WHERE id>27;


SELECT RAND() AS random_number;

SELECT id,name ,email, IFNULL(address,'not provide') AS address FROM employees ORDER BY RAND();
 
SELECT id,name ,email, IFNULL(address,'not provide') AS address FROM employees ORDER BY RAND() LIMIT 2;

 
----------------------------------------------------------
 
-- Day 5

-- Inner join 

CREATE TABLE category(
 categoryid INT AUTO_INCREMENT PRIMARY KEY,
 categoryname VARCHAR(100) NOT NULL
);

SHOW TABLES;

CREATE TABLE Product (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    Categoryid INT
);

INSERT INTO Category (CategoryName) VALUES
('Electronics'),
('Clothing'),
('Books'),
('Toys'),
('Furniture'),
('Groceries');

SELECT * FROM Category;

INSERT INTO Product (ProductName, Price, Stock, CategoryID) VALUES
('Smartphone', 699.99, 50, 1),
('Laptop', 999.99, 30, 1),
('Headphones', 49.99, 100, 1),
('T-Shirt', 19.99, 200, 2),
('Jeans', 39.99, 150, 2),
('Jacket', 59.99, 80, 2),
('Novel', 14.99, 300, 3),
('Textbook', 89.99, 40, 3),
('Magazine', 4.99, 500, 3),
('Action Figure', 24.99, 60, 4),
('Board Game', 34.99, 90, 4),
('Puzzle', 9.99, 120, 4),
('Sofa', 499.99, 10, 5),
('Dining Table', 799.99, 5, 5),
('Chair', 129.99, 20, 5),
('Milk', 1.99, 300, 6),
('Bread', 2.49, 250, 6),
('Eggs', 3.49, 200, 6),
('Tablet', 399.99, 40, 1),
('TV', 799.99, 15, 1),
('Sweater', 29.99, 120, 2),
('Shoes', 49.99, 80, 2),
('Notebook', 7.99, 300, 3),
('Stuffed Toy', 14.99, 150, 4),
('Cabinet', 399.99, 12, 5),
('Desk', 199.99, 8, 5),
('Juice', 3.99, 100, 6),
('Chips', 2.99, 150, 6),
('Lamp', 59.99, 25, 5),
('Gaming Console', 499.99, 25, 1);

SELECT * FROM Product;

--------

select * from product;

-- fetch all products along with their category names :

select  
p.Productid,
p.ProductName,
p.Price as product_price,
p.Stock,
c.categoryname

from product p 
inner join category c on p.categoryid = c.categoryid;

-- fetch products from a spacific category

select  
p.Productid,
p.ProductName,
p.Price as product_price,
p.Stock,
c.categoryname

from product p 
inner join category c on p.categoryid = c.categoryid
where c.categoryname = "Electronics" ;

 -- fetch all products along with their category names :

select  
p.Productid,
p.ProductName,
p.Price as product_price,
p.Stock,
c.categoryname

from product p 
inner join category c on p.categoryid = c.categoryid;

-- fetch products from a spacific category :

select  
p.Productid,
p.ProductName,
p.Price as product_price,
p.Stock,
c.categoryname

from product p 
inner join category c on p.categoryid = c.categoryid
where c.categoryname = "Electronics" ;

-- fetch categories that have greater than 3 products :

select  
p.Productid,
p.ProductName,
p.Price as product_price,
p.Stock,
c.categoryname

from product p 
inner join category c on p.categoryid = c.categoryid
where p.Stock>3 ;

-- fetch categories that have more than 5 products :

select  
p.Productid,
p.ProductName,
p.Price as product_price,
p.Stock,
c.categoryname

from product p 
inner join category c on p.categoryid = c.categoryid
where p.Stock<=5 ;

-- fetch total stock value for each category :

 SELECT 
 c.categoryid,
 c.categoryname,
 SUM(p.stock * p.price) AS totalstock
FROM category c
INNER JOIN product p ON p.categoryid = c.categoryid
GROUP BY c.categoryid, c.categoryname
ORDER BY c.categoryid;


-- find categories with the highest total stock value 

SELECT 
c.categoryname,
 SUM(p.stock * p.price) AS totalstock
FROM category c
INNER JOIN product p ON p.categoryid = c.categoryid
GROUP BY c.categoryid, c.categoryname
ORDER BY totalstock desc
limit 1;


-- retrive products in categories that contain 'furniture' and "electronics"

select  
p.Productid,
p.ProductName,
p.Price,
p.Stock,
c.categoryname

from product p 
inner join category c on p.categoryid = c.categoryid
where c.categoryname in ('furniture','electronics')
order by c.categoryname
;

--------------------------
 
-- Day 6
-- DROP or Delete Table

DROP TABLE product;
DROP TABLE category;

CREATE TABLE Category (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL
);

CREATE TABLE Product (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    CategoryID INT
);

SHOW TABLES;

INSERT INTO Category (CategoryName) VALUES
('Electronics'),
('Clothing'),
('Books'),
('Toys'),
('Furniture'),
('Groceries');

SELECT * FROM Category;

INSERT INTO Product (ProductName, Price, Stock, CategoryID) VALUES
('Smartphone', 699.99, 50, 1),
('Laptop', 999.99, 30, 1),
('Headphones', 49.99, 100, 1),
('T-Shirt', 19.99, 200, 2),
('Jeans', 39.99, 150, 2),
('Jacket', 59.99, 80, 2),
('Novel', 14.99, 300, 3),
('Textbook', 89.99, 40, 3),
('Magazine', 4.99, 500, 3),
('Action Figure', 24.99, 60, 4),
('Board Game', 34.99, 90, 4),
('Puzzle', 9.99, 120, 4),
('Sofa', 499.99, 10, 5),
('Dining Table', 799.99, 5, 5),
('Chair', 129.99, 20, 5),
('Milk', 1.99, 300, 6),
('Bread', 2.49, 250, 6),
('Eggs', 3.49, 200, 6),
('Tablet', 399.99, 40, 1),
('TV', 799.99, 15, 1),
('Sweater', 29.99, 120, 2),
('Shoes', 49.99, 80, 2),
('Notebook', 7.99, 300, 3),
('Stuffed Toy', 14.99, 150, 4),
('Cabinet', 399.99, 12, 5),
('Desk', 199.99, 8, 5),
('Juice', 3.99, 100, 6),
('Chips', 2.99, 150, 6),
('Lamp', 59.99, 25, 5),
('Gaming Console', 499.99, 25, 1);

SELECT * FROM Product;

-- inner join get all joined records
SELECT
p.productid,
p.productname,
p.price,
c.categoryname
FROM product p INNER JOIN category c ON p.categoryid=c.categoryid;

-- LEFT JOIN  join records + left table all records
SELECT
p.productid,
p.productname,
p.price,
c.categoryname
FROM product p LEFT JOIN category c ON p.categoryid=c.categoryid;


-- RIGHT JOIN  join records + right table all records
SELECT
p.productid,
p.productname,
p.price,
c.categoryname
FROM product p RIGHT JOIN category c ON p.categoryid=c.categoryid;

 SHOW TABLES;

CREATE TABLE Customer (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PhoneNumber VARCHAR(15) NOT NULL,
    Address VARCHAR(255) NOT NULL
);

CREATE TABLE Category (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL
);

CREATE TABLE Product (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    CategoryID INT
);

CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT NOT NULL,
    OrderDate DATE NOT NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL
);

CREATE TABLE OrderDetails (
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL
);


SHOW TABLES;

INSERT INTO Customer (FirstName, LastName, Email, PhoneNumber, Address) VALUES
('John', 'Doe', 'john.doe@example.com', '1234567890', '123 Elm St'),
('Jane', 'Smith', 'jane.smith@example.com', '0987654321', '456 Oak St'),
('Alice', 'Brown', 'alice.brown@example.com', '1122334455', '789 Maple St');

SELECT * FROM Customer;

INSERT INTO Category (CategoryName) VALUES
('Electronics'),
('Clothing'),
('Books'),
('Furniture'),
('Groceries');

SELECT * FROM Category;

INSERT INTO Product (ProductName, Price, Stock, CategoryID) VALUES
('Laptop', 1000.00, 50, 1),
('T-Shirt', 20.00, 200, 2),
('Novel', 15.00, 150, 3),
('Dining Table', 300.00, 20, 4),
('Milk', 2.50, 100, 5),
('Headphones', 50.00, 80, 1);
SELECT * FROM Product;

INSERT INTO Orders (CustomerID, OrderDate, TotalAmount) VALUES
(1, '2024-12-01', 1050.00),
(2, '2024-12-02', 35.00),
(3, '2024-12-03', 300.00);

INSERT INTO OrderDetails (OrderID, ProductID, Quantity) VALUES
(1, 1, 1), -- Laptop
(1, 6, 1), -- Headphones
(2, 2, 1), -- T-Shirt
(2, 3, 1), -- Novel
(3, 4, 1); -- Dining Table

SELECT * FROM orders o;

--------------------------------------

-- Day 7

-- Q1: Retrieve all customers and their orders

SELECT
c.CustomerID,
CONCAT(c.firstname,' ',c.lastname) as CustomerName,
o.OrderId,
DATE_FORMAT(o.OrderDate,'%d-%m-%Y') as OrderDate,
o.TotalAmount
FROM customer c
INNER JOIN Orders o on o.CustomerID=c.CustomerID;

 -- Q2: Find the total sales (quantity * price) for each product.
 

SELECT
  p.ProductID,
  p.ProductName,
  SUM(od.Quantity * p.Price) AS TotalSales
FROM product p
INNER JOIN OrderDetails od 
  ON od.ProductID = p.ProductID
GROUP BY p.ProductID, p.ProductName
ORDER BY TotalSales DESC;



-- Q3: List the categories with the number of products in each category.

SELECT
ca.CategoryName,
COUNT(p.ProductID) as No_of_products
from category ca
INNER JOIN product p ON p.CategoryID=ca.CategoryID
GROUP BY ca.CategoryID;

-- Q4: Retrieve all orders along with the product names and quantities.
SELECT
o.OrderID,
DATE_FORMAT(o.OrderDate,'%d-%m-%Y') as OrderDate,
p.ProductName,
od.Quantity
FROM orders o
INNER JOIN OrderDetails od ON od.OrderID=o.OrderID
INNER JOIN Product p on p.ProductID=od.ProductID;

-- Q5 : Find customers who have never placed an order.
 
-- Q5 : Find customers who have never placed an order.
SELECT
c.CustomerID,
CONCAT(c.firstname,' ',c.lastname) as CustomerName
FROM Customer c
LEFT JOIN Orders o on o.CustomerID=c.CustomerID
WHERE o.OrderID IS NULL;


---------------------------------

-- Day 8


-- Q6: Find the most popular product by the total quantity sold.

SELECT
p.ProductID,
p.ProductName,
SUM(o.Quantity) as Total_Quantity
FROM orderdetails o
INNER JOIN product p on p.ProductID=o.ProductID
GROUP BY p.ProductID
ORDER BY Total_Quantity DESC
LIMIT 1;


-- Q7: Find the total revenue generated by each customer.

SELECT
c.CustomerId,
CONCAT(c.FirstName,' ',c.LastName) AS Name,
SUM(p.price*od.quantity) AS Total_Revenue
FROM Customer c
INNER JOIN Orders o ON c.CustomerId=o.CustomerId
INNER JOIN OrderDetails od ON o.OrderID=od.OrderID
INNER JOIN Product p ON od.ProductId=p.ProductId
GROUP BY c.CustomerId,Name;

-- q8 -Find all products that are out of stock.
SELECT ProductID,ProductName,Stock FROM product where stock=0;


-- Q9: List customers who placed orders in the last 30 days.
SELECT
c.CustomerId,
CONCAT(c.FirstName,' ',c.LastName) AS Name,
o.OrderDate
FROM Customer c
INNER JOIN Orders o on o.CustomerId=c.CustomerId
WHERE o.OrderDate>=CURDATE()-INTERVAL 30 DAY;
-- Current date minus 2 day => 3 days before current date
select CURDATE()-INTERVAL 2 DAY;

-- Q10: Retrieve the average order amount.
SELECT SUM(TotalAmount)/COUNT(OrderID) Average_Order_amount FROM orders o;
SELECT AVG(TotalAmount)Average_Order_amount FROM orders o;

----------------------------

-- Day 9

-- Q11: List the top 3 most expensive products.
SELECT ProductName,Price FROM product ORDER BY Price DESC LIMIT 3;

-- Q12: Retrieve the total number of products sold for each category.

SELECT
c.CategoryName,
SUM(o.Quantity) AS Qty
FROM category c
INNER JOIN Product p ON p.CategoryID=c.CategoryID
INNER JOIN orderdetails o ON o.productID=p.productID
GROUP BY c.CategoryID
;

-- Q13: Find the order with the highest total amount.
SELECT 
o.OrderID,
o.TotalAmount 
FROM orders o 
ORDER BY TotalAmount DESC LIMIT 1;


-- Q14: Retrieve all customers who ordered "Laptop."
SELECT
DISTINCT c.CustomerID,
CONCAT(c.FirstName,' ',c.LastName) as CustomerName
FROM customer c
INNER JOIN orders o on o.CustomerID=c.CustomerID
INNER JOIN orderdetails od on od.OrderID=o.OrderID
INNER JOIN Product p on p.ProductId=od.ProductId
WHERE p.ProductName='Laptop';


-- Q15: Get the total revenue generated for each product.
SELECT
p.ProductId,
p.ProductName,
SUM(od.Quantity * p.Price) as Total_Revenue
FROM Product p
INNER JOIN orderdetails od on p.ProductId=od.ProductId
GROUP BY p.ProductId;


-- Q16: Retrieve all orders with >= 2 products.
SELECT
o.orderID,
o.orderDate,
COUNT(od.orderDetailID) as Number_of_Products
FROM orders o
INNER JOIN orderdetails od on od.orderID=o.orderID
GROUP BY o.orderID
HAVING Number_of_Products>=2

---------------------------------------------

-- Day 10

-- Q17: Find the least popular product by quantity sold.


SELECT
p.productID,
p.ProductName,
(od.Quantity) as QuantitySold
FROM product p
INNER JOIN orderdetails od on od.productID=p.productID
GROUP BY p.productID
ORDER BY QuantitySold asc
LIMIT 3;

-- Q18: List all products that belong to the "Electronics" category.

SELECT
p.productID,
p.ProductName,
p.Price,
p.Stock
FROM product p
INNER JOIN category c on c.CategoryID = p.CategoryID
where c.CategoryName='Electronics';

-- Q19: Retrieve the total number of customers who have placed orders.
SELECT count(DISTINCT o.CustomerID) FROM orders o;

-- Q20: Find the category with the highest revenue.
SELECT
c.CategoryID,
c.CategoryName,
sum(od.Quantity * p.Price) as TotalRevenue
FROM category c
INNER JOIN PRODUCT p on p.categoryID=c.categoryID
INNER JOIN OrderDetails od on od.ProductId=p.ProductId
GROUP BY c.CategoryID
ORDER BY TotalRevenue DESC
LIMIT 1;

------------


--   --- SUB QUERIES---

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);

CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    department_id INT,
    salary DECIMAL(10, 2)
);


INSERT INTO departments (department_name) VALUES
('HR'),
('IT'),
('Finance'),
('Marketing'),
('Sales'),
('Operations'),
('Legal'),
('Customer Support'),
('R&D'),
('Logistics');


INSERT INTO employees (name, department_id, salary) VALUES
('Alice', 1, 60000),
('Bob', 1, 55000),
('Cathy', 1, 62000),
('David', 2, 80000),
('Eve', 2, 85000),
('Frank', 2, 78000),
('Grace', 2, 90000),
('Hannah', 3, 95000),
('Ian', 3, 72000),
('Jane', 3, 89000),
('Kevin', 4, 50000),
('Laura', 4, 51000),
('Mike', 4, 52000),
('Nina', 5, 70000),
('Oscar', 5, 68000),
('Paul', 5, 72000),
('Quincy', 6, 75000),
('Rachel', 6, 76000),
('Steve', 6, 77000),
('Tina', 7, 95000),
('Uma', 7, 97000),
('Victor', 7, 92000),
('Wendy', 8, 48000),
('Xander', 8, 46000),
('Yvonne', 8, 49000),
('Zane', 9, 110000),
('Amber', 9, 105000),
('Brian', 9, 102000),
('Charlie', 10, 60000),
('Diana', 10, 58000),
('Edward', 10, 62000);


-- Find employees with a salary higher than the average salary.
SELECT * FROM employees  where salary>(SELECT AVG(SALARY) FROM employees);

-- Find the average salary for each department.

SELECT
d.department_name,
avg_salaries.avg_salary
from departments d
INNER JOIN(
SELECT
e.department_id,
AVG(e.SALARY) as avg_salary
FROM employees e
GROUP BY e.department_id
) avg_salaries
on d.department_id=avg_salaries.department_id;
 
 ---------------------------

-- Day 11

 
-- List employees along with their department names and the average salary of their department.
--  name,salary,department_name,avg_departement_salary

SELECT
e.name,
e.salary,
d.department_name,
(SELECT
  AVG(salary)
  from employees
  where department_id=e.department_id
) as avg_departement_salary
FROM employees e
INNER JOIN departments d on e.department_id=d.department_id;



-- Find employees who earn more than the average salary of their department.


SELECT
e.name,
e.salary,
d.department_name
FROM employees e
INNER JOIN departments d on e.department_id=d.department_id
where e.salary>(SELECT
  AVG(salary)
  from employees
  where department_id=e.department_id);


-- Find departments that have at least one employee earning more than $80,000.
SELECT
d.department_name
from departments d
where EXISTS(
SELECT 1
FROM employees e
where e.department_id=d.department_id and e.salary>80000);

--------------

-- CASE WHEN

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary INT,
    age INT,
    hire_date DATE
);

INSERT INTO users (name, department, salary, age, hire_date) VALUES
('Alice', 'HR', 60000, 29, '2020-01-15'),
('Bob', 'Finance', 75000, 35, '2018-07-10'),
('Charlie', 'IT', 80000, 28, '2019-03-25'),
('Diana', 'Finance', 70000, 42, '2016-09-20'),
('Eve', 'HR', 50000, 25, '2021-11-12'),
('Frank', 'IT', 85000, 31, '2017-05-30'),
('Grace', 'IT', 75000, 30, '2022-06-01'),
('Hank', 'HR', 65000, 45, '2015-08-20'),
('Ivy', 'Finance', 80000, 38, '2019-12-15'),
('Jack', 'IT', 90000, 27, '2023-04-01');


SELECT * FROM users;

-- Classify Employees by salary
-- >80000  High
-- >60000  Medium
-- Else    Low

SELECT name,salary,
CASE
  WHEN salary>80000 THEN 'High'
  WHEN salary>60000 THEN 'Medium'
  ELSE 'Low'
END as `Salary Category`
FROM users;

-- Age Group
/*
    < 30     Young
    30 - 40  Middle-age
    Else     Senior
*/

SELECT Name,Age,
CASE
  WHEN age<30 THEN 'Young'
  WHEN age BETWEEN 30 and 40 THEN 'Middle-age'
  ELSE 'Senior'
END as `Age Category`
FROM users;

-- Hire Category
SELECT Name,Hire_date,
CASE
  WHEN hire_date> '2025-01-01' THEN 'New Hire'
  ELSE 'Experienced'
END as `Hire Category`
FROM users;

-- Bonus Calc
/*
HR 0.1
Finance 0.15
IT 0.2
ELSE 0.05
*/

SELECT Name,department,salary,
CASE
  WHEN department = 'HR' THEN  salary*0.1
  WHEN department = 'Finance' THEN  salary*0.15
  WHEN department = 'IT' THEN  salary*0.20
  ELSE salary*0.05
END as `Bonus`
FROM users;

-------------------------------------

-- Day 12

-- MySQL Constraints

-- Primary Key
-- Foreign Key
-- Unique Key


CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);
INSERT INTO departments (name) VALUES ('HR'),('IT'),('Finance');

-- DROP Foreign Key
ALTER TABLE employees DROP FOREIGN KEY employees_ibfk_1;
ALTER TABLE employees ADD CONSTRAINT fk_depart_id FOREIGN KEY (department_id) REFERENCES departments(id);

-- ----------------------------------------------------
-- Foreign Key
  -- CASCADE
  -- SET NULL
  -- RESTRICT | No Action

-- CASCADE
CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

SELECT * FROM employees;
INSERT INTO employees (name,department_id) VALUES ('Ram',1),('Sam',3),('Raja',2),('Kumar',1);

-- SET NULL

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
    ON DELETE SET NULL
    ON UPDATE SET NULL
);

DELETE FROM departments WHERE id = 1;
UPDATE departments SET id = 5 WHERE id = 2;

-- RESTRICT | No Action

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) 
    ON DELETE RESTRICT 
    ON UPDATE RESTRICT
);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) 
    ON DELETE NO ACTION 
    ON UPDATE NO ACTION
);

-- ----------------------------------------------------
-- Single column unique constraint
CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(100) NOT NULL
);

INSERT INTO users(email,username) VALUES ('ram@gmail.com','ram'),('sam@gmail.com','sam'),('raja@gmail.com','raja');

SELECT * FROM users;
-- Throw ERROR Duplicate entry 'ram@gmail.com' for key email
INSERT INTO users(email,username) VALUES ('ram@gmail.com','ram');

-- Ignore Error and Skip insert
INSERT IGNORE INTO users(email,username) VALUES ('ram@gmail.com','ram');

-- ON DUPLICATE KEY UPDATE
INSERT INTO users(email,username) VALUES ('ram@gmail.com','ram')
ON DUPLICATE KEY
UPDATE username='ram123';


-- Multiple column unique constraint
CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    unique(first_name,last_name)
);

SELECT * FROM employees;
INSERT INTO employees(first_name,last_name,department) VALUES
('Ram','Kumar','HR'),('Sam','Sundar','IT'),('Ravi','Kumar','IT');

-- ERROR 
INSERT INTO employees(first_name,last_name,department) VALUES
('Ram','Kumar','Finance');


---------------------------------


-- Day 13

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    city VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users (name, age, city, email) VALUES
('John Doe', 25, 'New York', 'johndoe@example.com'),
('Jane Smith', 30, 'Los Angeles', 'janesmith@example.com'),
('Michael Brown', 22, 'Chicago', 'michaelbrown@example.com'),
('Emily Johnson', 28, 'Houston', 'emilyjohnson@example.com'),
('David White', 35, 'Phoenix', 'davidwhite@example.com'),
('Sarah Miller', 27, 'Philadelphia', 'sarahmiller@example.com'),
('James Wilson', 29, 'San Antonio', 'jameswilson@example.com'),
('Jessica Taylor', 32, 'San Diego', 'jessicataylor@example.com'),
('Matthew Martinez', 24, 'Dallas', 'matthewmartinez@example.com'),
('Ashley Anderson', 31, 'San Jose', 'ashleyanderson@example.com');

-- -------------------------------------------------------------
-- AUTOCOMMIT  |  ROLLBACK    |   COMMIT

SELECT * FROM users;
delete from users;

SET AUTOCOMMIT=OFF; -- by default ON
ROLLBACK;   -- Re Roll current transaction
COMMIT;  -- save the change

SET AUTOCOMMIT=ON;

-- ----------------------------------------------------------------------------------------

-- CURRENT_DATE()
-- CURRENT_TIME()
-- NOW()
 
SELECT CURRENT_DATE(), CURRENT_TIME(),  NOW();

CREATE TABLE log_book(
  cur_date DATE,
  cur_time TIME,
  cur_date_time DATETIME
);

INSERT INTO log_book VALUES (CURRENT_DATE(), CURRENT_TIME(),  NOW());

SELECT * FROM log_book;

-- ------------------------------------------------------------------------------------------
-- Views

SELECT * FROM users;
-- CREATE NEW VIEW
CREATE VIEW sample as SELECT name,age,email FROM users;
-- Interact result-set
SELECT * FROM sample where age>25;
-- If View is already exists we can replace that view
CREATE OR REPLACE VIEW sample as SELECT name,age,email FROM users;

-- ------------------------------------------------------------------------------------------
-- ROLLUP

CREATE TABLE sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50),
    product VARCHAR(50),
    sales_amount DECIMAL(10,2),
    sale_date DATE
);


INSERT INTO sales (category, product, sales_amount, sale_date) VALUES
('Electronics', 'TV', 500.00, '2022-01-10'),
('Electronics', 'Laptop', 800.00, '2022-01-15'),
('Electronics', 'Headphones', 150.00, '2022-02-05'),
('Clothing', 'Shirt', 200.00, '2023-02-12'),
('Clothing', 'Jeans', 300.00, '2023-03-20'),
('Clothing', 'Jacket', 400.00, '2024-03-25'),
('Furniture', 'Sofa', 1000.00, '2024-04-05'),
('Furniture', 'Table', 700.00, '2024-04-15'),
('Furniture', 'Chair', 250.00, '2024-05-01');

SELECT * FROM sales;

SELECT * FROM sales;
SELECT
category,
SUM(sales_amount) as Total_Sales
FROM sales
GROUP BY category WITH ROLLUP
;


SELECT
category,
product,
SUM(sales_amount) as Total_Sales
FROM sales
GROUP BY category,product WITH ROLLUP;

SELECT
YEAR(sale_date),
MONTH(sale_date),
SUM(sales_amount) as Total_Sales
FROM sales
GROUP BY YEAR(sale_date),MONTH(sale_date) WITH ROLLUP;

--------------------------------------------

-- Day 14

-- Triggers
-- Syntax of a Trigger
-- ------------------------------------------------------------
DELIMITER //

CREATE TRIGGER trigger_name
  [BEFORE | AFTER] [INSERT | UPDATE | DELETE]
  ON table_name

  FOR EACH ROW
  BEGIN
      -- ------
      -- ------
      -- ------
      -- ------
      -- ------
  END //


DELIMITER ;

OLD.column_name
NEW.column_name
-- ------------------------------------------------------------

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10, 2)
);

DELIMITER //

CREATE TRIGGER salary_check
	BEFORE INSERT on employees
    FOR EACH ROW
    BEGIN
    	IF NEW.salary < 0 THEN
        	SET NEW.salary=0;
        END IF;
    END //

DELIMITER ;



DELIMITER $$
CREATE TRIGGER prevent_salary_decrease
	BEFORE UPDATE ON employees
    FOR EACH ROW
    BEGIN
    	IF NEW.salary < OLD.salary THEN
           SIGNAL SQLSTATE '45000'
           SET MESSAGE_TEXT='Salary cannot be decreased;';
        END IF;
    END $$
DELIMITER ;

UPDATE employees SET salary=2500 WHERE id=1;
UPDATE employees SET salary=1500 WHERE id=1;


CREATE TABLE audit_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(50),
    employee_id INT,
    action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
	CREATE TRIGGER after_insert_employee
 		AFTER INSERT ON employees
        FOR EACH ROW
        	BEGIN
            	INSERT INTO audit_log (action,employee_id) VALUE ('Employee Added',NEW.id);
          END$$
DELIMITER ;

INSERT INTO employees (name, salary) VALUES ('Rajesh', 6000);


-- Show all Triggers
SHOW TRIGGERS;

-- Drop a Trigger:
DROP TRIGGER trigger_name;

/*
  inventory table :  
    product_id     1
    product_name   Book
    stock          10     => 5

  orders table :
    order_id       1
    product_id     1
    quantity       5
    order_date     2025-03-06

  order_audit table :
    audit_id        1
    order_id        1
    old_quantity    10
    new_quantity    5
    changed_at      2025-03-06

-- Trigger 1: Prevent Ordering More Than Available Stock  (BEFORE INSERT orders)
-- Trigger 2: Deduct Stock After Order Insertion  (AFTER INSERT )
-- Trigger 3: Log Order Changes Before Update
  

*/

--------------------------------

-- Day 15

CREATE TABLE inventory (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    stock INT NOT NULL
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    quantity INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES inventory(product_id)
);

CREATE TABLE order_audit (
    audit_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    old_quantity INT,
    new_quantity INT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO inventory (product_name,stock) VALUES ('Pen',25),('Box',5),('Pencil',10),('Eraser',6),('Scale',25);


-- ---------------
-- Trigger 1: Prevent Ordering More Than Available Stock


DELIMITER $$
  CREATE TRIGGER before_order_insert 
  BEFORE INSERT ON orders
  FOR EACH ROW
  BEGIN
    DECLARE available_stock INT;
    -- Get available stock
    SELECT stock INTO available_stock FROM inventory WHERE product_id = NEW.product_id;
    
    IF available_stock IS NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Product does not exist in inventory!';
    ELSEIF available_stock < NEW.quantity THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Not enough stock available!';
    END IF;

  END$$
DELIMITER ;


-- Trigger 2: Deduct Stock After Order Insertion  (AFTER INSERT )

DELIMITER $$
  CREATE TRIGGER after_order_insert
  AFTER INSERT ON orders
  FOR EACH ROW
  BEGIN
    UPDATE inventory  SET stock = stock - NEW.quantity WHERE product_id = NEW.product_id;
  END$$
DELIMITER ;


-- Trigger 3: Log Order Changes Before Update

DELIMITER $$
  CREATE TRIGGER before_order_update
  BEFORE UPDATE ON orders
  FOR EACH ROW
  BEGIN
      INSERT INTO order_audit (order_id, old_quantity, new_quantity)
          VALUES (OLD.order_id, OLD.quantity, NEW.quantity);
  END$$

DELIMITER ;


-- Stored Procedure 

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    user_status VARCHAR(20) DEFAULT 'active',
    last_updated DATETIME
);

INSERT INTO users (username, email, age, user_status, last_updated) VALUES
('arun_kumar', 'arun@example.com', 25, 'active', '2025-01-15 10:00:00'),
('priya_nair', 'priya@example.com', 30, 'active', '2025-01-20 14:30:00'),
('suresh_reddy', 'suresh@example.com', 22, 'inactive', '2025-02-01 09:15:00'),
('lakshmi_rao', 'lakshmi@example.com', 28, 'active', '2025-02-10 16:45:00'),
('vignesh_iyer', 'vignesh@example.com', 35, 'pending', '2025-03-01 11:20:00');


-- Syntax ----------------------------
DELIMITER //
CREATE PROCEDURE procedure_name ([parameter(s)])
  BEGIN
    -- SQL statements here
  END //
DELIMITER ;


-- ----------------------------
-- Simple Stored Procedure (No Parameters):
DELIMITER //
CREATE PROCEDURE GetAllUsers()
BEGIN
  SELECT * FROM users;
END //
DELIMITER ;

CALL GetAllUsers();
-- ----------------------------
-- Procedure with IN Parameter: 

DELIMITER //
CREATE PROCEDURE GetUserById(IN userId INT)
BEGIN
    SELECT * FROM users WHERE id = userId;
END //
DELIMITER ;

CALL GetUserById(2);

SET @id=2;
CALL GetUserById(@id);

-- ---------------------------
-- Procedure with Multiple Parameters:
DELIMITER //
CREATE PROCEDURE GetUsersByStatus(IN status VARCHAR(20), IN minAge INT)
BEGIN
    SELECT * FROM users 
    WHERE user_status = status 
    AND age >= minAge;
END //
DELIMITER ;

CALL GetUsersByStatus('active', 18);

-- ---------------------------
-- Procedure with OUT Parameter:

DELIMITER //
CREATE PROCEDURE GetUserCount(OUT total INT)
BEGIN
    SELECT COUNT(*) INTO total FROM users;
END //
DELIMITER ;

CALL GetUserCount(@total_users);
SELECT @total_users;

-- Procedure with INOUT Parameter:
DELIMITER //
CREATE PROCEDURE UpdateAndCount(INOUT userCount INT, IN status VARCHAR(20))
BEGIN
    UPDATE users SET last_updated = NOW() WHERE user_status = status;
    SELECT COUNT(*) INTO userCount FROM users WHERE user_status = status;
END //
DELIMITER ;

SET @count = 0;
CALL UpdateAndCount(@count, 'active');
SELECT @count;

-- ---------------------------------------------------------------

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10,2) NOT NULL,
    hire_date DATE,
    department VARCHAR(30)
);
INSERT INTO employees (first_name, last_name, salary, hire_date, department) VALUES
('Karthik', 'Narayanan', 60000.00, '2023-06-15', 'Engineering'),
('Deepa', 'Menon', 45000.00, '2023-08-01', 'Marketing'),
('Ramesh', 'Pillai', 75000.00, '2022-12-10', 'Finance'),
('Swetha', 'Krishnan', 38000.00, '2024-01-20', 'HR'),
('Srinivas', 'Gopal', 52000.00, '2023-03-15', 'Engineering');



DELIMITER //
CREATE PROCEDURE AdjustSalary(IN empId INT, IN adjustment DECIMAL(10,2)) -- 1,1000 2,10000
BEGIN
    DECLARE current_salary DECIMAL(10,2);
    
    SELECT salary INTO current_salary  FROM employees WHERE id = empId; -- 60000 -- 45000
    
    -- current_salary=60000  45000

    IF current_salary > 50000 THEN
        UPDATE employees 
        SET salary = salary + (adjustment * 0.5)
        WHERE id = empId;  -- 60500.00
    ELSE
        UPDATE employees 
        SET salary = salary + adjustment -- 46000.00
        WHERE id = empId;
    END IF;
END //
DELIMITER ;


CALL AdjustSalary(1, 1000.00);  -- 60500.00
CALL AdjustSalary(2, 1000.00);  -- 46000.00

-----------------------------------------