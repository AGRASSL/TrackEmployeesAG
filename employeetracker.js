const mysql = require('mysql');
const inquirer = require('inquirer');
var connection = require('./connection')

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'G28H6Bxp?',
  database: 'track_employeesDB',
});

connection.connect((err) => {
  if (err) throw err;
  optionPrompt();
});

const employeeOptions = [
    "Rachel Green",
    "Monica Geller",
    "Pheobe Buffe",
    "Chandler Bing",
    "Ross Geller",
    "Joey Tribiani",
    "exit"
];

const updateOptions = [
    "First Name",
    "Last Name",
    "Role",
    "exit"
]

optionPrompt();

const optionPrompt = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add Department',
        'Add Role',
        'Add Employee',
        'View Departments',
        'View Roles',
        'View Employees',
        'Update Employee Roles',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add Department':
          addDepartment();
          break;

        case 'Add Role':
          addRole();
          break;

        case 'Add Employee':
          addEmployee();
          break;

        case 'View Departments':
          viewDepartments();
          break;

        case 'View Roles':
          viewRoles();
          break;

        case 'View Employees':
            viewEmployees();
            break;

        case 'Update Employee Roles':
                updateRoles();
                break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addDepartment = () => {
  inquirer
    .prompt({
      name: 'department',
      type: 'input',
      message: 'What department would you like to add ?',
    })
    .then((answer) => {
      const query = 'INSERT INTO department (name) Values ( ? )';
      connection.query(query, { department: answer.department }, (err, res) => {
        viewDepartments();
      });
    });
};

const viewDepartments = () => {
  const query =
    'SELECT * FROM department';
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log(res);
    optionPrompt();
  });
};

const addRole = () => {
    inquirer
      .prompt({
        name: 'role',
        type: 'input',
        message: 'What role would you like to add ?',
      })
      .then((answer) => {
        const query = 'INSERT INTO role (name) Values ( ? )';
        connection.query(query, { role: answer.role }, (err, res) => {
          viewRoles();
        });
      });
  };

  const viewRoles = () => {
    const query =
      'SELECT * FROM role';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.log(res)
      optionPrompt();
    });
  };

  const addEmployee = () => {
    inquirer
      .prompt({
        name: 'employee',
        type: 'input',
        message: 'What employee would you like to add ?',
      })
      .then((answer) => {
        const query = 'INSERT INTO employee (name) Values ( ? )';
        connection.query(query, { employee: answer.employee }, (err, res) => {
          viewEmployees();
        });
      });
  };

  const viewEmployees = () => {
    const query =
      'SELECT id, first_name, last_name, title, role_id, manager_id FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
      console.log(res);
      optionPrompt();
    });
  };



