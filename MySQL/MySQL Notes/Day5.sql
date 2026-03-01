CREATE TABLE category(
  categoryId INT AUTO_INCREMENT PRIMARY KEY,
  categoryName VARCHAR(100) NOT NULL
);

SHOW TABLES;

CREATE TABLE product(
productId INT AUTO_INCREMENT PRIMARY KEY,
productName VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock INT NOT NULL,
categoryId INT
);

INSERT INTO category (categoryName) VALUES
('Electronics'),
('Clothing'),
('Groceries'),
('Furniture'),
('Books'),
('Toys');

SELECT * FROM category;


INSERT INTO product (productName,price,stock,categoryId) VALUES
('Laptop', 1000.00, 10, 1),
('Smartphone', 800.00, 15, 1),
('Tablet', 400.00, 20, 1),
('T-shirt', 20.00, 50, 2),
('Jeans', 40.00, 30, 2),
('Jacket', 60.00, 25, 2),
('Apple', 1.00, 100, 3),
('Bread', 2.50, 80, 3),
('Milk', 1.50, 70, 3),
('Sofa', 500.00, 5, 4),
('Dining Table', 300.00, 3, 4),
('Chair', 100.00, 10, 4),
('Fiction Book', 15.00, 40, 5),
('Non-fiction Book', 20.00, 35, 5),
('Textbook', 50.00, 20, 5),
('Action Figure', 25.00, 15, 6),
('Puzzle', 10.00, 50, 6),
('Board Game', 30.00, 20, 6),
('Headphones', 150.00, 25, 1),
('Camera', 1200.00, 5, 1),
('Dress', 70.00, 20, 2),
('Bananas', 0.50, 120, 3),
('Orange Juice', 3.00, 60, 3),
('Desk', 250.00, 10, 4),
('Notebook', 5.00, 100, 5),
('Novel', 18.00, 30, 5),
('Plush Toy', 15.00, 40, 6),
('Remote Car', 50.00, 15, 6),
('Drone', 800.00, 5, 1);


SELECT * FROM product;

-- Fetch all products along with their category names:
SELECT
p.productId,
p.productName,
p.price as product_price,
p.stock,
c.categoryName
FROM product p
INNER JOIN category c ON p.categoryID=c.categoryID;

-- Fetch products from a specific category
SELECT
p.productId,
p.productName,
p.price as product_price,
p.stock,
c.categoryName
FROM product p
INNER JOIN category c ON p.categoryID=c.categoryID
WHERE c.categoryName='Electronics'
;


-- Fetch products from a specific category
SELECT
p.productId,
p.productName,
p.price as product_price,
p.stock,
c.categoryName
FROM product p
INNER JOIN category c ON p.categoryID=c.categoryID
WHERE c.categoryName='Electronics'
;
-- Fetch categories that have more than 3 products:

SELECT
p.productId,
p.productName,
p.price,
p.stock,
c.categoryName
FROM product p
INNER JOIN category c ON p.categoryID=c.categoryID
WHERE p.stock>3


-- Fetch total stock value for each category:

SELECT
c.categoryId,
c.categoryName,
SUM(p.stock*p.price) as totalStock
FROM category c
INNER JOIN product p on p.categoryId=c.categoryId
GROUP BY c.categoryName
ORDER BY c.categoryId
;

-- Find Categories with the Highest Total Stock Value

SELECT
c.categoryName,
SUM(p.stock*p.price) as totalStock
FROM category c
INNER JOIN product p on p.categoryId=c.categoryId
GROUP BY c.categoryName
ORDER BY totalStock DESC
LIMIT 1;

-- Retrieve Products in Categories That Contain ‘Furniture’ or ‘Electronics’
SELECT
p.productId,
p.productName,
p.price,
p.stock,
c.categoryName
FROM product p
INNER JOIN category c ON p.categoryID=c.categoryID
WHERE c.categoryName IN ('Furniture' ,'Electronics')
ORDER BY c.categoryName
;