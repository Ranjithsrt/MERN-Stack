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
GROUP BY YEAR(sale_date),MONTH(sale_date) WITH ROLLUP