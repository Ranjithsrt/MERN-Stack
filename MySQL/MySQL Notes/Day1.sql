-- Create new database
create database react_class;

-- choose database
use react_class;

-- Create new table
create table students(
  id int auto_increment primary key,
  name varchar(50) not null,
  email varchar(50) unique,
  dob  date,
  fees decimal(10,2),
  age int
);

-- show all database name in mysql server
show databases;

-- show all table name in selected database
show tables;

-- Insert one new record
insert into students (name,email,dob,fees,age)
values ('Tiya','tiya@gmail.com','2001-10-12',55000,23);

-- Insert multiple records
insert into students (name,email,dob,fees,age) values
('Sophia Brown', 'sophia.brown@example.com', '2001-10-15', 1300.50, 23),
('James Wilson', 'james.wilson@example.com', '2000-07-10', 1400.00, 24),
('Olivia Davis', 'olivia.davis@example.com', '1999-04-20', 1350.25, 25);

-- show all records in table with all columns
select * from students;

-- show selected columns only
select id,name,email from students;


-- alias column name
select id as `S.No`,name as `Full Name`,email as `Email Address` from students;

-- Alter table add gender column
ALTER TABLE students ADD COLUMN gender VARCHAR(45) NOT NULL AFTER name;

-- update record
update students set gender='Female' where id=1;
update students set gender='Female' where id=2;
update students set gender='Male' where id=3 or id=4;
