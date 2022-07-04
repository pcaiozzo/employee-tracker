INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Legal"),
    ("Human Resources");


INSERT INTO role (title, salary, department_id) 
VALUES
    ("Sales Manager", 70000, 1),
    ("Software Engineer", 120000, 2),
    ("Lawyer", 110000, 3),
    ("HR Manager", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, salary, manager_id)
VALUES 
    ('Tucker', 'Smith', 1, 70000, NULL),
    ('Anthony', 'Doe', 2, 120000, NULL),
    ('Carter', 'White', 3, 110000, NULL),
    ('Adalyn', 'Brown', 4, 90000, NULL);