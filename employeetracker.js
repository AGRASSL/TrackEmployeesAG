const mysql = require('mysql');
const inquirer = require('inquirer');

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
  runSearch();
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

const optionPrompt = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
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
  connection.query(query, (err, res) => {
    res.forEach(({ department }) => console.log(department));
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

