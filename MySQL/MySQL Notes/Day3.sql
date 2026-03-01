-- limit query
SELECT * FROM employees;
SELECT * FROM employees LIMIT 5;
SELECT * FROM employees LIMIT 10 OFFSET 5;
SELECT * FROM employees LIMIT 5 OFFSET 10;
SELECT * FROM employees LIMIT 5 , 10;

SELECT * FROM employees ORDER BY id DESC LIMIT 5;
SELECT * FROM employees ORDER BY id DESC LIMIT 5,10;

-- Pagination Example
-- page-1
SELECT * FROM employees LIMIT 10 offset 0;
-- page-2
SELECT * FROM employees LIMIT 10 offset 10;
-- page-3
SELECT * FROM employees LIMIT 10 offset 20;

show tables;

-- Rename Table
-- Syntax  RENAME TABLE old_table_name TO new_table_name    (Rename single table)
RENAME TABLE students TO users;
-- Rename Multiple Tables
RENAME TABLE users TO students,employees TO staffs;
RENAME TABLE students TO users,staffs TO employees;

SELECT * FROM users;
DESCRIBE users;

-- Add new single column
ALTER TABLE users ADD COLUMN phone_number VARCHAR(15);
ALTER TABLE users ADD COLUMN username VARCHAR(45) AFTER gender;

-- Add Multiple Columns
ALTER TABLE users
ADD COLUMN father_name VARCHAR(50) AFTER name,
ADD COLUMN mother_name VARCHAR(50) AFTER father_name;


-- DROP COLUMN
-- SYNTAX  :    ALTER TABLE table_name DROP COLUMN column_name

-- Remove Single Column
ALTER TABLE users
DROP COLUMN mother_name;

-- Remove Multiple Columns
ALTER TABLE users
DROP COLUMN age,
DROP COLUMN phone_number;