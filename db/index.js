const connection = require("./connection");

class EmployeesManager {
  constructor(connection) {
    this.connection = connection;
  }

  getDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department;");
  }

  viewRole() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
  }
  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  getEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }

  addDepartments(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  createEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }
  updateEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  } 

}

module.exports = new EmployeesManager(connection);
