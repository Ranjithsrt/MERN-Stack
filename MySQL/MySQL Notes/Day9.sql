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
HAVING Number_of_Products>=2;

-- Q17: Find the least popular product by quantity sold.

-- Q18: List all products that belong to the "Electronics" category.

-- Q19: Retrieve the total number of customers who have placed orders.

-- Q20: Find the category with the highest revenue.

