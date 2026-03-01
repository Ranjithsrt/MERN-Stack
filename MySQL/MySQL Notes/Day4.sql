-- String Functions

-- concatenate two or more string
SELECT CONCAT('Tutor',' ','Joes') AS result;
SELECT CONCAT('Name: ',name,'- City :',city) AS result FROM employees;
-- Extract a substring from a string
SELECT SUBSTRING('MySQL Tutorial',1,5) AS result;
SELECT CONCAT(SUBSTRING(LOWER(name),1,3),'@tutorjoes.in') AS company_email FROM employees;
-- to change case to lowercase
SELECT LOWER('MySQL Tutorial') AS result;
-- to change case to uppercase
SELECT UPPER('MySQL Tutorial') AS result;
-- get the length of string
SELECT LENGTH('MySQL') AS result;
SELECT LENGTH(' MySQL ') AS result;
-- trim is to remove leading and trailing spaces
SELECT LENGTH(trim(' MySQL ')) AS result;
-- -----------------------------------------------------------------------------------

-- Math Functions

-- Absolute Value
SELECT ABS(-10) AS result;
-- Round a number to a specifed number of decimal placed
SELECT ROUND(3.14159,2) as result;
-- ceil
SELECT CEIL(3.14159) as result;
-- floor
SELECT FLOOR(3.14159) as result;
-- Power
SELECT POWER(2,3) as result;

-- -----------------------------------------------------------------------------------
-- Aggregate Functions
-- COUNT
SELECT COUNT(*) AS total_employees FROM employees;
-- SUM
SELECT  SUM(salary) AS total_salary FROM employees;
SELECT  SUM(salary)/COUNT(*) AS avg_salary FROM employees;
-- AVG
SELECT  AVG(salary) AS avg_salary FROM employees;
-- MAX
SELECT  MAX(salary) AS maximum_salary FROM employees;
-- MIN
SELECT  MIN(salary) AS minimum_salary FROM employees;

-- -----------------------------------------------------------------------------------
-- Control Flow Function for conditional logic
-- IF 
SELECT name,salary,IF(salary>=75000,'HIGH','LOW') AS salary_status FROM employees;

-- CASE : more complex conditional logic.
SELECT
name,
salary,
CASE
  WHEN salary >=75000 THEN 'HIGH'
  WHEN salary >=60000 THEN 'MEDIUM'
  ELSE 'LOW'
END AS salary_status
FROM employees;

-- -----------------------------------------------------------------------------------
-- JSON Functions

SELECT JSON_EXTRACT('{"name":"Ram Kumar","age":45,"city":"Salem"}','$.name') AS Name;
SELECT JSON_EXTRACT('{"name":"Ram Kumar","age":45,"city":"Salem"}','$.age') AS Age;
SELECT JSON_ARRAY('Apple','Banana','Cherry') AS FruitArray;
SELECT COALESCE(NULL,'Joes') as Result;
SELECT name,email, COALESCE(address,'Not Provided') FROM employees where id>27;
SELECT name,email, IFNULL(address,'Not Provided') FROM employees where id>27;
SELECT RAND() AS random_number;
SELECT id,name,email, IFNULL(address,'Not Provided') AS address FROM employees ORDER BY RAND() LIMIT 3;
