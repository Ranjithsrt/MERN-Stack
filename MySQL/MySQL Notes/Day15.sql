CREATE TABLE inventory (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    stock INT NOT NULL
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    quantity INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES inventory(product_id)
);

CREATE TABLE order_audit (
    audit_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    old_quantity INT,
    new_quantity INT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO inventory (product_name,stock) VALUES ('Pen',25),('Box',5),('Pencil',10),('Eraser',6),('Scale',25);


-- ---------------
-- Trigger 1: Prevent Ordering More Than Available Stock


DELIMITER $$
  CREATE TRIGGER before_order_insert 
  BEFORE INSERT ON orders
  FOR EACH ROW
  BEGIN
    DECLARE available_stock INT;
    -- Get available stock
    SELECT stock INTO available_stock FROM inventory WHERE product_id = NEW.product_id;
    
    IF available_stock IS NULL THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Product does not exist in inventory!';
    ELSEIF available_stock < NEW.quantity THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Not enough stock available!';
    END IF;

  END$$
DELIMITER ;


-- Trigger 2: Deduct Stock After Order Insertion  (AFTER INSERT )

DELIMITER $$
  CREATE TRIGGER after_order_insert
  AFTER INSERT ON orders
  FOR EACH ROW
  BEGIN
    UPDATE inventory  SET stock = stock - NEW.quantity WHERE product_id = NEW.product_id;
  END$$
DELIMITER ;


-- Trigger 3: Log Order Changes Before Update

DELIMITER $$
  CREATE TRIGGER before_order_update
  BEFORE UPDATE ON orders
  FOR EACH ROW
  BEGIN
      INSERT INTO order_audit (order_id, old_quantity, new_quantity)
          VALUES (OLD.order_id, OLD.quantity, NEW.quantity);
  END$$

DELIMITER ;


-- Stored Procedure 

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    user_status VARCHAR(20) DEFAULT 'active',
    last_updated DATETIME
);

INSERT INTO users (username, email, age, user_status, last_updated) VALUES
('arun_kumar', 'arun@example.com', 25, 'active', '2025-01-15 10:00:00'),
('priya_nair', 'priya@example.com', 30, 'active', '2025-01-20 14:30:00'),
('suresh_reddy', 'suresh@example.com', 22, 'inactive', '2025-02-01 09:15:00'),
('lakshmi_rao', 'lakshmi@example.com', 28, 'active', '2025-02-10 16:45:00'),
('vignesh_iyer', 'vignesh@example.com', 35, 'pending', '2025-03-01 11:20:00');


-- Syntax ----------------------------
DELIMITER //
CREATE PROCEDURE procedure_name ([parameter(s)])
  BEGIN
    -- SQL statements here
  END //
DELIMITER ;


-- ----------------------------
-- Simple Stored Procedure (No Parameters):
DELIMITER //
CREATE PROCEDURE GetAllUsers()
BEGIN
  SELECT * FROM users;
END //
DELIMITER ;

CALL GetAllUsers();
-- ----------------------------
-- Procedure with IN Parameter: 

DELIMITER //
CREATE PROCEDURE GetUserById(IN userId INT)
BEGIN
    SELECT * FROM users WHERE id = userId;
END //
DELIMITER ;

CALL GetUserById(2);

SET @id=2;
CALL GetUserById(@id);

-- ---------------------------
-- Procedure with Multiple Parameters:
DELIMITER //
CREATE PROCEDURE GetUsersByStatus(IN status VARCHAR(20), IN minAge INT)
BEGIN
    SELECT * FROM users 
    WHERE user_status = status 
    AND age >= minAge;
END //
DELIMITER ;

CALL GetUsersByStatus('active', 18);

-- ---------------------------
-- Procedure with OUT Parameter:

DELIMITER //
CREATE PROCEDURE GetUserCount(OUT total INT)
BEGIN
    SELECT COUNT(*) INTO total FROM users;
END //
DELIMITER ;

CALL GetUserCount(@total_users);
SELECT @total_users;

-- Procedure with INOUT Parameter:
DELIMITER //
CREATE PROCEDURE UpdateAndCount(INOUT userCount INT, IN status VARCHAR(20))
BEGIN
    UPDATE users SET last_updated = NOW() WHERE user_status = status;
    SELECT COUNT(*) INTO userCount FROM users WHERE user_status = status;
END //
DELIMITER ;

SET @count = 0;
CALL UpdateAndCount(@count, 'active');
SELECT @count;

-- ---------------------------------------------------------------

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10,2) NOT NULL,
    hire_date DATE,
    department VARCHAR(30)
);
INSERT INTO employees (first_name, last_name, salary, hire_date, department) VALUES
('Karthik', 'Narayanan', 60000.00, '2023-06-15', 'Engineering'),
('Deepa', 'Menon', 45000.00, '2023-08-01', 'Marketing'),
('Ramesh', 'Pillai', 75000.00, '2022-12-10', 'Finance'),
('Swetha', 'Krishnan', 38000.00, '2024-01-20', 'HR'),
('Srinivas', 'Gopal', 52000.00, '2023-03-15', 'Engineering');



DELIMITER //
CREATE PROCEDURE AdjustSalary(IN empId INT, IN adjustment DECIMAL(10,2)) -- 1,1000 2,10000
BEGIN
    DECLARE current_salary DECIMAL(10,2);
    
    SELECT salary INTO current_salary  FROM employees WHERE id = empId; -- 60000 -- 45000
    
    -- current_salary=60000  45000

    IF current_salary > 50000 THEN
        UPDATE employees 
        SET salary = salary + (adjustment * 0.5)
        WHERE id = empId;  -- 60500.00
    ELSE
        UPDATE employees 
        SET salary = salary + adjustment -- 46000.00
        WHERE id = empId;
    END IF;
END //
DELIMITER ;


CALL AdjustSalary(1, 1000.00);  -- 60500.00
CALL AdjustSalary(2, 1000.00);  -- 46000.00