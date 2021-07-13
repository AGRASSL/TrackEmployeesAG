const mysql = require('mysql');
const inquirer = require('inquirer');
var connection = require('./connection')



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

function optionPrompt() {
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
      .prompt ( 
        {
          type: "input", 
          message: "What is the new Department's Name?",
          name: "name",
        }
    )

    .then (function(answer){
        const query = connection.query(
          "INSERT INTO department SET ?", 
         answer,
          function(err, answer) {
            if (err) throw err;
            console.log( "Department added!");
    
            viewDepartments(); 
          }
        );    
      });
    };

const viewDepartments = () => {
  const query =
    'SELECT * FROM department';
  connection.query(query, function (err, answer) {
    if (err) throw err;
    console.table(answer);
    optionPrompt();
  });
};

function addRole() {
    console.log("Inserting a new Role");
    inquirer 
    .prompt ([ 
        {
          type: "input", 
          message: "What is the Title of the role?",
          name: "title",
        },
        {
          type: "input", 
          message: "What is the salary of the role?",
          name: "salary"
        },
        {
          type: "input",
          message: "What is the role's department id?",
          name: "department_id", 
        }
      ])
      .then (function(answer){
        const query = connection.query(
          "INSERT INTO role SET ?", 
         answer,
          function(err, answer) {
            if (err) throw err;
            console.log( "Role added!");
    
            viewRoles(); 
          }
        );    
      });
    };

  const viewRoles = () => {
    const query =
      'SELECT * FROM role';
    connection.query(query, (err, answer) => {
      if (err) throw err;
      console.table(answer)
      optionPrompt();
    });
  };


function addEmployee() {
    console.log("Inserting a new employee");
    inquirer 
      .prompt ([ 
        {
          type: "input", 
          message: "What is the employee's first name?",
          name: "first_name",
        },
        {
          type: "input", 
          message: "what is the employee's last name?",
          name: "last_name"
        },
        {
          type: "input",
          message: "What is the employee's role ID number?",
          name: "role_id", 
        },
        {
          type: "input", 
          message: "What is the managers ID number?",
          name: "manager_id"
        }
      ])
      .then (function(answer){
        const query = connection.query(
          "INSERT INTO employee SET ?", 
         answer,
          function(err, answer) {
            if (err) throw err;
            console.log( "Employee added!");
    
            viewEmployees(); 
          }
        );    
      });
    };

  const viewEmployees = () => {
    const query =
      'SELECT first_name, last_name, role_id, manager_id FROM employee';
    connection.query(query, (err, answer) => {
        if (err) throw err;
      console.table(answer);
      optionPrompt();
    });
  };

