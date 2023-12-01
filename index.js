const inquirer = require("inquirer");
const db = require("./db");

const init = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select from the list",
        name: "action",
        choices: [
          "view all departments",
          "view roles",
          "view all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
    ])
    .then((answers) => {
      const { action } = answers;
      switch (action) {
        case "view all departments":
          getDepartments();
          break;

        case "view roles":
          viewRole();
          break;

        case "view all employees":
          getEmployees();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          createEmployee();
          break;

        case "Update an employee role":
          updateEmployee();
          break;

        case "Quit":
          quit();
          break;

        default:
          console.log("Error: Invalid choice");
          break;
      }
    });
};

async function getDepartments() {
  try {
    const [rows] = await db.getDepartments();
    let departments = rows;
    console.table(departments);
    init();
  } catch (error) {
    console.error("Error fetching Departments: " + error.message);
  }
}

async function viewRole() {
  try {
    const [rows] = await db.viewRole();
    let role = rows;
    console.table(role);
    init();
  } catch (error) {
    console.error("Error fetching Roles:" + error.message);
  }
}

async function getEmployees() {
  try {
    const [rows] = await db.getEmployees();
    let employee = rows;
    console.table(employee);
    init();
  } catch (error) {
    console.error("Error fetching Employees: " + error.message);
  }
}

async function addDepartment() {
  const answers = await inquirer.prompt([
    {
      name: "name",
      message: "What is the name of the department?",
    },
  ]);
  const { name } = answers;
  try {
    await db.addDepartments({ name: name }); 
    console.log(`Added ${name} to the database`);
    init();
  } catch (error) {
    console.error("Error adding department: " + error.message);
    init();
  }
}


function addRole() {
  db.getDepartments().then(([rows]) => {
    const departmentChoices = rows.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    inquirer
      .prompt([
        {
          name: "title",
          message: "What is the name of the role?",
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
      ])
      .then((role) => {
        if (!role.title || !role.salary || !role.department_id) {
          console.error("Error: Please provide valid input for role details.");
          init();
          return;
        }
        db.addRole(role)
          .then(() => console.log(`Added ${role.title} to the database`))
          .then(() => init())
          .catch((error) => {
            console.error("Error adding role: " + error.message);
            init();
          });
      });
  });
}

// function createEmployee() {
//   inquirer.prompt([
//     {
//       name: "first_name",
//       message: "What is the employee's first name?",
//     },
//     {
//       name: "last_name",
//       message: "What is the employee's last name?",
//     },
//   ]).then((answers) => {
//     const { first_name, last_name } = answers;
//     db.createEmployee({ first_name, last_name })
//       .then(() => console.log(`Added employee to the database`))
//       .then(() => init())
//       .catch((error) => {
//         console.error("Error adding employee: " + error.message);
//         init();
//       });
//   });
// }

// async function updateEmployee(employeeToUpdate) {
//   try {
//     const existingEmployee = await db.({ employee: employeeToUpdate });

//     if (!existingEmployee) {
//       console.log("Employee not found");
//       return;
//     }

//     existingEmployee.name = employeeToUpdate.name;
//     existingEmployee.salary = employeeToUpdate.salary;

//     await existingEmployee.save();
//     return existingEmployee;
//   } catch (error) {
//     console.error("Error updating employee:", error);
//     // Handle the error appropriately
//   }
// }

function quit() {
  console.log("Exiting the application. Goodbye!");
  process.exit();
}

module.exports = {
  addDepartment,
};

init();
