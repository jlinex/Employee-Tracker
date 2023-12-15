INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Human Resources"),
       ("Information Technology"),
       ("Support");

INSERT INTO employee_role (department_id, title, salary)
VALUES (1, "Sales Manager", 110000),
       (2, "HR Manager", 85000),
       (3, "IT Manager", 125000),
       (4, "Support Manager", 87000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Taylor", 1, 1),
       ("Kelly", "Williams", 2, 2),
       ("Jessica", "Collins", 3, 3),
       ("Mason", "Smith", 1, 1);

      