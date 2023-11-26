const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db");
const connect = require("./db");


const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select from the list",
        name: "List",
        choices: [
          
          "view all departments",
          "view all roles",
          "view all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Remove an employee",
          "Remove a department",
          "Remove a role",
          "done",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.List) {
        case "view all departments":
          viewDepartments();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "view all employees":
          viewAllEmployees();
          break;

        case "Add a department":
          addDepartment(answers);
        case "Add a role":
          addRole(answers);
          break;

        case " Add a employee":
          addEmployee(answers);
          break;

        case "Update an employee role":
          addAnEmployeeRole(answers);
          break;
        case "done":
            done(answers);
          break;

          default:
            console.log("Error Invalid choice");
            break;
      }
    });
};

init();

function viewAllEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => loadMainPrompts())
    .catch((error) =>
    console.error("Error fetch Employees"),err);
  };
