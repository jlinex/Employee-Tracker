const inquirer = require('inquirer');
const express = require("express");
const mysql = require('mysql2');


const PORT = process.env.PORT || 3306;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'n8z9qmtovfdgqsp6',
      password: 'yl9icj9a2y1y1e3u',
      database: 'e7y9urgbr98aql8n',
      connectTimeout: 20000,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the Employee Database!");
  start();
});


function start() {
  inquirer
  .prompt([
    {
    type: 'list',
    message: 'What would you like todo?',
    choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "EXIT",
        ],
     name: "action",
      }
    ])


  .then((response) => {
    switch (response.action) {
      case "View all departments":
        viewAllDepartments();
        break;
        case "View all roles":
        viewAllRoles();
        break;
        case "View all employees":
        viewAllEmployees();
        break;
        case "Add a department":
        addaDepartment();
        break;
        case "Add a role":
        addaRole();
        break;
        case "Add an employee":
        addanEmployee();
        break;
        case "Update an employee role":
        updateEmployeeRole();
        break;
    }
  });

function viewAllDepartments() {
  db.query('SELECT * FROM department', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });

  start();
};
}