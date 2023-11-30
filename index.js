const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db");
const {prompt} = require("inquirer");

const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select from the list",
        name: "List",
        choices: [
          {
            name: "view all departments",
          },

          {
            name: "view all employees",
          },
          {
            name: "view roles",
          },
          {
            name: "Add a department",
          },

          {
            name: "Add a role",
          },

          {
            name: "Add an employee",
          },

          {
            name: "Update an employee role",
          },

          { 
            name: "Remove an employee",
          },

          {
            name: "Remove a department",
          },

          {
            name: "Remove a role",
          },

          {
            name: "done",
          },
        ],
      },
    ])
    .then((res) => {
      let answers = res.List;
      switch (answers) {
        case "view all departments":
          viewDepartments(answers);
          break;

        case "view all roles":
          viewRoles(answers);
          break;

        case "view all employees":
          viewEmployees(answers);
          break;

        case "Add a department":
          addDepartment(answers);

        case "View Roles":
          viewRoles();

        case "Add role":
          addRole(answers);
          break;

        case " Add a employee":
          addEmployee(answers);
          break;

        case "Update an employee role":
          addAnEmployeeRole(answers);
          break;

        case "VIEW EMPLOYEES BY DEPARTMENT":
          viewEmployeesByDepartment(answers);
          break;

        case "VIEW_EMPLOYEES_BY_MANAGER":
          viewEmployeesByManager(answers);
          break;

        case "done":
          quit(answers);
          break;

        default:
          console.log("Error Invalid choice");
          break;
      }
    });
};

function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let department = rows;
      console.log("\n");
      console.table(department);
    })
    .then(() => loadMainPrompts())
    .catch((error) => console.error("Error fetch Employees"));
}
function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => loadMainPrompts())
    .catch((error) => console.error("Error fetch Employees"));
}

function viewRoles() {
  db.findAllRoles().then(([rows]) => {
    let roles = rows;
    console.table(roles);
  });
  prompt([
    {
      name: "titles",
      message: "What's the new role you want to add",
    },
    {
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "list",
      name: "department_id",
      message: "Which department does the role belong to?",
      choices: departmentChoices,
    },
  ]);
}

init();
