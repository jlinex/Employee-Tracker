USE employee_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    role_id int NOT NUll,
    manager_id int,
    PRIMARY KEY(id)
);

CREATE TABLE employee_role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 0) NOT NULL,
    department_id int NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE department_id (
	id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

