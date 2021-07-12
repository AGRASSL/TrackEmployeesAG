DROP DATABASE IF EXISTS track_employeesDB;
CREATE database track_employeesDB;

USE track_employeesDB;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT into department (id, name)
VALUES (1, "Sales");
INSERT into department (id, name)
VALUES (2, "Engineering");
INSERT into department (id, name)
VALUES (3, "Finance");
INSERT into department (id, name)
VALUES (4, "Legal");
INSERT into department (id, name)
VALUES (5, "Manager");

select * from department;

INSERT into role (id, title, salary, department_id)
VALUES (100, "Sales Lead", 38000, 1);
INSERT into role (id, title, salary, department_id)
VALUES (101, "Salesperson", 32000, 1);
INSERT into role (id, title, salary, department_id)
VALUES (102, "Lead Engineer", 106000, 2);
INSERT into role (id, title, salary, department_id)
VALUES (103, "Accountant", 40000, 3);
INSERT into role (id, title, salary, department_id)
VALUES (104, "Lawer", 80000, 4);
INSERT into role (id, title, salary, department_id)
VALUES (112, "Manager", 88000, 5);

select * from role;

INSERT into employee (id, first_name, last_name, role_id, manager_id)
values (25, "Monica", "Geller", 3, 10); 
INSERT into employee (id, first_name, last_name, role_id, manager_id)
values (24, "Ross", "Geller", 4, 11);
INSERT into employee (id, first_name, last_name, role_id, manager_id)
values (23, "Rachel", "Green", 5, 12);
INSERT into employee (id, first_name, last_name, role_id, manager_id)
values (22, "Joey", "Tribiani", 6, 13);
INSERT into employee (id, first_name, last_name, role_id, manager_id)
values (21, "Chandler", "Bing", 7, 14);
INSERT into employee (id, first_name, last_name, role_id, manager_id)
values (20, "Pheobe", "Bufe", 8, 15);

select * from employee;