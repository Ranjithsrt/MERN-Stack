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
SUM(od.Quantity*p.Price) as TotalSales
FROM product p
INNER JOIN OrderDetails od ON od.ProductID=p.ProductID
GROUP BY p.ProductID

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
SELECT
c.CustomerID,
CONCAT(c.firstname,' ',c.lastname) as CustomerName
FROM Customer c
LEFT JOIN Orders o on o.CustomerID=c.CustomerID
WHERE o.OrderID IS NULL;
