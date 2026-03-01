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
INNER JOIN departments d on e.department_id=d.department_id
 ;

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
  where department_id=e.department_id)


-- Find departments that have at least one employee earning more than $80,000.
SELECT
d.department_name
from departments d
where EXISTS(
SELECT 1
FROM employees e
where e.department_id=d.department_id and e.salary>80000);

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