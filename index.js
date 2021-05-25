const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMyTeamPage = require("./src/generatehtml.js");
const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const regexNumber = /^[1-9]*\d$/;
// an array to store manager and  team memebers which can be engg and intern from user
//and passed to generateMyTeamPage
allTeamMembers = [];

// // Create an array of questions for user input
// const questions = [];

// // Create a function to write README file
// function writeToFile(fileName, data) {}

// // Create a function to initialize app
function startCollectingInfo() {
  //welcome msg
  console.log(
    "            ******************** Welcome to Team Dashboard **************************\n"
  );
  console.log(
    "            ********************    Create your Team       **************************"
  );
  //collect manager info and add to teammem array
  //prompted to enter the team manager’s name, employee ID, email address, and office number

  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the team Manager's Name :",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter the team Manager's name.";
          }
        },
      },
      {
        type: "input",
        name: "empId",
        message: "Please enter the team Manager's Employee Id :",
        validate: (empId) => {
          if (regexNumber.test(empId)) {
            return true;
          } else {
            return "Please enter valid EmpId";
          }
        },
      },
      {
        type: "input",
        name: "emailId",
        message: "Please enter the team Manager's Email Id :",
        validate: (emailId) => {
          if (regexEmail.test(emailId)) {
            return true;
          } else {
            return "Please enter a valid email Id.";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter  team Manager's office number :",
        validate: (officeNumber) => {
          if (regexNumber.test(officeNumber)) {
            return true;
          } else {
            return "Please enter valid number.";
          }
        },
      },

      // {
      //   type: "confirm",
      //   name: "tableContents",
      //   message:
      //     "Would you like to add table of contents in your README.md file ? :",
      //   default: false,
      // },
      // {
      //   type: "input",
      //   name: "installationInfo",
      //   message:
      //     "What are the steps required to install your project? (please seperate the steps by ',') :",
      //   validate: (installationInfo) => {
      //     if (installationInfo) {
      //       return true;
      //     } else return "Please enter installation steps.";
      //   },
      // },
      // {
      //   type: "input",
      //   name: "usageInfo",
      //   message:
      //     "Please provide instructions and examples for use.(please seperate the instructions by ',') :",
      //   validate: (usageInfo) => {
      //     if (usageInfo) {
      //       return true;
      //     } else return "Please enter usage steps.";
      //   },
      // },
      // {
      //   type: "list",
      //   name: "licenseInfo",
      //   message: "Choose a license for your project. :",
      //   choices: ["Apache 2", "BSD 3", "BSD 2", "MIT", "MPL 2", "None"],
      // },
      // {
      //   type: "confirm",
      //   name: "contributorsIstrue",
      //   message: "Would you like to add contributors?",
      //   default: false,
      // },
      // {
      //   type: "input",
      //   name: "contributorInfo",
      //   message:
      //     "Please enter contributors information.(Please seperate the contributors name by ',') :",
      //   validate: (contributorInfo) => {
      //     if (contributorInfo) {
      //       return true;
      //     } else return "Please enter contributor Information.";
      //   },
      //   when: (answer) => {
      //     //   console.log("answer is  ", answer);
      //     if (answer.contributorsIstrue) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   },
      // },
      // {
      //   type: "confirm",
      //   name: "addingTestIsTrue",
      //   message: "Would you like to add Tests for your project? :",
      //   default: false,
      // },
      // {
      //   type: "input",
      //   name: "testInfo",
      //   message:
      //     "Please enter test information.(Please seperate the tests by ',') :",
      //   validate: (testInfo) => {
      //     if (testInfo) {
      //       return true;
      //     } else return "Please enter test Information.";
      //   },
      //   when: (answer) => {
      //     if (answer.addingTestIsTrue) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   },
      // },
      // {
      //   type: "confirm",
      //   name: "technologyIsTrue",
      //   message: "Would you like to add Technology stack used? :",
      //   default: false,
      // },
      // {
      //   type: "input",
      //   name: "technologyInfo",
      //   message:
      //     "Please enter Technology Stack used.(Please seperate the technologies by ',') :",
      //   validate: (technologyInfo) => {
      //     if (technologyInfo) {
      //       return true;
      //     } else return "Please enter technology used.";
      //   },
      //   when: (answer) => {
      //     if (answer.technologyIsTrue) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   },
      // },
    ])
    .then((responsedata) => {
      //   console.log(response);
      //   console.log(response.emailId);
      //destructor the object and pass it to manager class
      const { name, id, email, officeNumber } = responsedata;
      //  create an instance of manager with user input
      const manager = new Manager(name, id, email, officeNumber);
      // create object of kind manager and add it to allTeamMember array
      const addManager = {
        name: manager.getName(),
        id: manager.getId(),
        email: manager.getEmail(),
        otherfield: manager.getofficeNumber(),
      };

      //store object in global array
      allTeamMembers.push(addManager);

      promptOtherQuestions();
    });
}

// // Function call to initialize app
startCollectingInfo();
