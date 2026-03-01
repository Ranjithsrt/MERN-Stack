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