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

-- --------------------------------------------------------------------------------------

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


