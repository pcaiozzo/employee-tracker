const menu = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee",
      "Exit",
    ],
    name: "menu",
  },
];

const departmentQuestions = [
  {
    type: "input",
    message: "Enter the name of the new department: ",
    name: "addNewDepartment",
  },
];

const roleQuestions = [
  {
    type: "input",
    message: "What is the name of the role you want to add? ",
    name: "addNewRole",
  },
  {
    type: "input",
    message: "What is the salary of the role you want to add? ",
    name: "salary",
  },
  {
    type: "input",
    message: "Enter department ID associated with this role: ",
    name: "addRoleID",
  },
];

const employeeQuestions = [
  {
    type: "input",
    message: "What is the first name of the employee? ",
    name: "firstName",
  },
  {
    type: "input",
    message: "What is the last name of the employee? ",
    name: "lastName",
  },
  {
    type: "input",
    message: "Enter the role for this employee: ",
    name: "empRole",
  },
  {
    type: "input",
    message: "What is the employee's managers name? ",
    name: "empManager",
  },
];

const updateEmployeeQuestions = [
  {
    type: "input",
    message: "Enter the employee id of the employee you would like to update:",
    name: "who",
  },
  {
    type: "input",
    message: "Enter the new role id of the employee:",
    name: "newRole",
  },
];

module.exports = {
  menu,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateEmployeeQuestions
};
