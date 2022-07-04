const fs = require("fs");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const env = require("dotenv");
env.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const {
  menu,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateEmployeeQuestions
} = require("./js/index");

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("You are connected to the employee database!");
  mainMenu();
});

function mainMenu() {
  inquirer.prompt(menu).then((response) => {
    console.log(response);
    switch (response.menu) {
      case "View all departments":
        departments();
        break;
      case "View all roles":
        roles();
        break;
      case "View all employees":
        employees();
        break;
      case "Add a department":
        addNewDepartment();
        break;
      case "Add a role":
        addNewRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee":
        updateEmployee();
        break;
      case "Exit":
        process.exit(0);
    }
  });
};

function departments() {
  let sql = "SELECT * FROM department";
  db.query(sql, function (err, results) {
    if (err) throw err;
    console.log("\n");
    console.table(results);
  });
  mainMenu();
};

function roles() {
  let sql = "SELECT * FROM role";
  db.query(sql, function (err, results) {
    if (err) throw err;
    console.log("\n");
    console.table(results);
  });
  mainMenu();
};

function employees() {
  let sql = "SELECT * FROM employee";
  db.query(sql, function (err, results) {
    if (err) throw err;
    console.log("\n");
    console.table(results);
  });
  mainMenu();
};

function addNewDepartment() {
  inquirer.prompt(departmentQuestions).then((response) => {
    console.log(response);
    db.query(
      `INSERT INTO department(name) VALUES 
            ('${response.addNewDepartment}')`,
      function (err) {
        if (err) throw err;
        console.log(`${response.addNewDepartment} successfully added`);
      }
    );
    mainMenu();
  });
};

function addNewRole() {
  inquirer.prompt(roleQuestions).then((response) => {
    console.log(response);
    db.query(
      `INSERT INTO role(title, salary, department_id) VALUES 
            ('${response.addNewRole}', 
            ${response.salary},
            ${response.addRoleID})`,
      function (err) {
        if (err) throw err;
        console.log(`${response.addNewRole} successfully added`);
      }
    );
    mainMenu();
  });
};

function addEmployee() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log('\n');
        console.table(results);
    });

    inquirer
    .prompt(employeeQuestions)
    .then((response) => {
        db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES 
            ('${response.firstName}', 
            '${response.lastName}',
            ${response.empRole},
            ${response.empManager})`, 
      function (err) {
        if (err) throw err;
        console.log(
          `${response.firstName} ${response.lastName} successfully added`)
          
            mainMenu();
        });
    });
};

function updateEmployee() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log('\n');
        console.table(results);
    });

    inquirer
    .prompt(updateEmployeeQuestions)
    .then((res) => {
        db.query(`UPDATE employee SET role_id = ${res.newRole} WHERE id = ${res.who}`, function (err, results) {
            console.log('\n');
            console.log('Employee has been updated');
            mainMenu();
        });
    });
};
