INSERT INTO department (name),
VALUES ('Management'),
        ('Sales',),
        ('Accounting'),
        ('Human Resources'),
        ('Customer Services'),
        ('Quality Assurance'),
        ('Office Administrator');

INSERT INTO role (title, salary, department_id,)
VALUES ('Branch Manger',80000,1 ),
        ('Sales',60000,1),
        ('Accounting',70000,2),
        ('Human Resources',65000,2),
        ('Customer Services',55000,3),
        ('Quality Assurance',60000,3),
        ('Office Administrator',50000,4);
        ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, Manger),
VALUES  ('Jon', 'Smith' 1, NULL),
        ('Jon', 'Lee', 2, 1),
        ('Karen', 'Smith', 3, NULL),
        ('Jess', 'White', 4, 3),
        ('Junior', 'black', 5, NULL),
        ('Stacy', 'bud', 6, 5),
        ('Nancy', 'Light' 7, NULL),
        ('Tom', 'black', 8, 7);