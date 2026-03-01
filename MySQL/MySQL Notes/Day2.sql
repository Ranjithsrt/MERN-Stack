-- choose database
use react_class;

-- Create new table
create table employees(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
address TEXT,
city VARCHAR(50),
state VARCHAR(50),
country VARCHAR(50) DEFAULT 'India',
date_of_birth DATE,
course VARCHAR(50),
salary DECIMAL(10,2),
gender ENUM('Male','Female','Other')
);

-- change column name
ALTER TABLE employees CHANGE COLUMN data_of_birth date_of_birth DATE DEFAULT NULL;

-- list all tables
show tables;
-- Detailed view of table
describe employees;

-- Multiple Insert
INSERT INTO employees (name, email, address, city, state, country, date_of_birth, course, salary, gender)
VALUES
('Ananya Sharma', 'ananya.sharma@example.com', '123 Green St', 'Mumbai', 'Maharashtra', 'India', '1995-06-15', 'C', 55000, 'Female'),
('Rohan Gupta', 'rohan.gupta@example.com', '456 Blue St', 'Delhi', 'Delhi', 'India', '1992-09-10', 'Java', 75000, 'Male'),
('Sneha Iyer', 'sneha.iyer@example.com', '789 Red St', 'Chennai', 'Tamil Nadu', 'India', '1996-12-22', 'C++', 62000, 'Female'),
('Arjun Verma', 'arjun.verma@example.com', '987 Yellow St', 'Bengaluru', 'Karnataka', 'India', '1993-04-05', 'Python', 68000, 'Male'),
('Priya Nair', 'priya.nair@example.com', '654 White St', 'Kochi', 'Kerala', 'India', '1994-08-14', 'C#', 72000, 'Female'),
('Vikram Desai', 'vikram.desai@example.com', '321 Pink St', 'Ahmedabad', 'Gujarat', 'India', '1991-03-17', 'C++', 80000, 'Male'),
('Meera Menon', 'meera.menon@example.com', '223 Violet St', 'Thiruvananthapuram', 'Kerala', 'India', '1997-11-09', 'C', 53000, 'Female'),
('Siddharth Kulkarni', 'sid.kulkarni@example.com', '333 Orange St', 'Pune', 'Maharashtra', 'India', '1990-07-19', 'Java', 85000, 'Male'),
('Kavya Reddy', 'kavya.reddy@example.com', '444 Maroon St', 'Hyderabad', 'Telangana', 'India', '1993-02-28', 'Python', 67000, 'Female'),
('Aditya Joshi', 'aditya.joshi@example.com', '555 Indigo St', 'Nagpur', 'Maharashtra', 'India', '1992-05-21', 'JavaScript', 79000, 'Male'),
('Ishita Patel', 'ishita.patel@example.com', '666 Black St', 'Surat', 'Gujarat', 'India', '1998-01-15', 'C', 50000, 'Female'),
('Rajiv Chauhan', 'rajiv.chauhan@example.com', '777 Grey St', 'Jaipur', 'Rajasthan', 'India', '1989-06-30', 'C++', 90000, 'Male'),
('Ankita Mehta', 'ankita.mehta@example.com', '888 Magenta St', 'Indore', 'Madhya Pradesh', 'India', '1996-12-11', 'Python', 60000, 'Female'),
('Kunal Jain', 'kunal.jain@example.com', '999 Aqua St', 'Bhopal', 'Madhya Pradesh', 'India', '1991-09-08', 'Java', 82000, 'Male'),
('Pooja Singh', 'pooja.singh@example.com', '111 Beige St', 'Lucknow', 'Uttar Pradesh', 'India', '1994-11-23', 'C#', 75000, 'Female'),
('Aarav Kumar', 'aarav.kumar@example.com', '222 Lilac St', 'Patna', 'Bihar', 'India', '1993-03-13', 'C', 65000, 'Male'),
('Tanvi Chawla', 'tanvi.chawla@example.com', '333 Cyan St', 'Chandigarh', 'Punjab', 'India', '1997-07-06', 'C++', 59000, 'Female'),
('Ritesh Bhatia', 'ritesh.bhatia@example.com', '444 Lime St', 'Noida', 'Uttar Pradesh', 'India', '1990-10-27', 'Python', 91000, 'Male'),
('Neha Kapoor', 'neha.kapoor@example.com', '555 Amber St', 'Gurgaon', 'Haryana', 'India', '1995-05-19', 'Java', 78000, 'Female'),
('Harsh Vardhan', 'harsh.vardhan@example.com', '666 Peach St', 'Kanpur', 'Uttar Pradesh', 'India', '1988-08-01', 'C#', 88000, 'Male'),
('Ira Das', 'ira.das@example.com', '777 Olive St', 'Kolkata', 'West Bengal', 'India', '1998-03-24', 'C', 52000, 'Female'),
('Ravi Prasad', 'ravi.prasad@example.com', '888 Teal St', 'Ranchi', 'Jharkhand', 'India', '1991-12-20', 'JavaScript', 87000, 'Male'),
('Shruti Sen', 'shruti.sen@example.com', '999 Silver St', 'Agartala', 'Tripura', 'India', '1993-09-29', 'C++', 64000, 'Female'),
('Nikhil Agarwal', 'nikhil.agarwal@example.com', '111 Bronze St', 'Guwahati', 'Assam', 'India', '1994-02-05', 'Java', 71000, 'Male'),
('Simran Gill', 'simran.gill@example.com', '222 Tan St', 'Amritsar', 'Punjab', 'India', '1997-06-13', 'C', 56000, 'Female'),
('Kabir Khan', 'kabir.khan@example.com', '333 Purple St', 'Srinagar', 'Jammu & Kashmir', 'India', '1992-07-20', 'Python', 85000, 'Male'),
('Disha Yadav', 'disha.yadav@example.com', '444 White St', 'Dehradun', 'Uttarakhand', 'India', '1995-11-08', 'C++', 62000, 'Female'),
('Rahul Thakur', 'rahul.thakur@example.com', '555 Blue St', 'Shimla', 'Himachal Pradesh', 'India', '1990-01-18', 'C#', 93000, 'Male'),
('Anjali Rao', 'anjali.rao@example.com', '666 Green St', 'Panaji', 'Goa', 'India', '1998-04-16', 'JavaScript', 68000, 'Female');



select * from employees;
select name,salary from employees;
select name,salary from employees order by salary asc;
select name,salary from employees order by salary desc;
select * from employees where city='Mumbai';
select state  from employees;
select distinct state  from employees;
select distinct course  from employees;
select * from employees where salary>70000;
select * from employees where salary>70000 and gender='Female';
select * from employees where city='Chennai' or city='Mumbai';
select * from employees where course='C' or course='Java' or course='Python';
select * from employees where course in ('C','Java','Python');
select * from employees where course not in ('C','Java','Python');
select name,salary  from employees where salary>=60000 and salary<=70000;
select name,salary  from employees where salary between 60000 and 70000;
select name,date_of_birth  from employees where date_of_birth between '1997-01-01' and '1997-12-31';
select * from employees where address='';
insert into employees (name,email) values ('Joes','Joes@gmail.com');
select * from employees where address is NULL;
select * from employees where address is not NULL;
update employees set address='25 Cherry Road' where id=2;
update employees set city='Salem',state='Tamil Nadu' where id=2;