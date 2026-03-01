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


-- List employees along with their department names and the average salary of their department.
--  name,salary,department_name,avg_departement_salary


-- Find employees who earn more than the average salary of their department.


-- Find departments that have at least one employee earning more than $80,000.

