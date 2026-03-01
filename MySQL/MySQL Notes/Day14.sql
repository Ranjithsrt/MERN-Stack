-- Triggers
-- Syntax of a Trigger
-- ------------------------------------------------------------
DELIMITER //

CREATE TRIGGER trigger_name
  [BEFORE | AFTER] [INSERT | UPDATE | DELETE]
  ON table_name

  FOR EACH ROW
  BEGIN
      -- ------
      -- ------
      -- ------
      -- ------
      -- ------
  END //


DELIMITER ;

OLD.column_name
NEW.column_name
-- ------------------------------------------------------------

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10, 2)
);

DELIMITER //

CREATE TRIGGER salary_check
	BEFORE INSERT on employees
    FOR EACH ROW
    BEGIN
    	IF NEW.salary < 0 THEN
        	SET NEW.salary=0;
        END IF;
    END //

DELIMITER ;



DELIMITER $$
CREATE TRIGGER prevent_salary_decrease
	BEFORE UPDATE ON employees
    FOR EACH ROW
    BEGIN
    	IF NEW.salary < OLD.salary THEN
           SIGNAL SQLSTATE '45000'
           SET MESSAGE_TEXT='Salary cannot be decreased;';
        END IF;
    END $$
DELIMITER ;

UPDATE employees SET salary=2500 WHERE id=1;
UPDATE employees SET salary=1500 WHERE id=1;


CREATE TABLE audit_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(50),
    employee_id INT,
    action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$
	CREATE TRIGGER after_insert_employee
 		AFTER INSERT ON employees
        FOR EACH ROW
        	BEGIN
            	INSERT INTO audit_log (action,employee_id) VALUE ('Employee Added',NEW.id);
          END$$
DELIMITER ;

INSERT INTO employees (name, salary) VALUES ('Rajesh', 6000);


-- Show all Triggers
SHOW TRIGGERS;

-- Drop a Trigger:
DROP TRIGGER trigger_name;

/*
  inventory table :  
    product_id     1
    product_name   Book
    stock          10     => 5

  orders table :
    order_id       1
    product_id     1
    quantity       5
    order_date     2025-03-06

  order_audit table :
    audit_id        1
    order_id        1
    old_quantity    10
    new_quantity    5
    changed_at      2025-03-06

-- Trigger 1: Prevent Ordering More Than Available Stock  (BEFORE INSERT orders)
-- Trigger 2: Deduct Stock After Order Insertion  (AFTER INSERT )
-- Trigger 3: Log Order Changes Before Update
  

*/