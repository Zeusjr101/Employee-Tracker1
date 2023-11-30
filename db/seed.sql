-- Inserting data into the department table
INSERT INTO department (name)
VALUES ('Management'),
       ('Sales'),
       ('Accounting'),
       ('Human Resources'),
       ('Customer Services'),
       ('Quality Assurance'),
       ('Office Administrator');

-- Inserting data into the role table
INSERT INTO role (title, salary, department_id)
VALUES ('Branch Manager', 80000, 1),
       ('Sales', 60000, 1),
       ('Accounting', 70000, 3),
       ('Human Resources', 65000, 4),
       ('Customer Services', 55000, 5),
       ('Quality Assurance', 60000, 6),
       ('Office Administrator', 50000, 7),
       ('Lawyer', 190000, 4); 

-- Inserting data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jon', 'Smith', 1, NULL),
       ('Jon', 'Lee', 2, 1),
       ('Karen', 'Smith', 3, NULL),
       ('Jess', 'White', 4, 3),
       ('Junior', 'Black', 5, NULL),
       ('Stacy', 'Bud', 6, 5),
       ('Nancy', 'Light', 7, NULL),
       ('Tom', 'Black', 8, 7);
