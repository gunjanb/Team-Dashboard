const Employee = require("./lib/employee.js");
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
const Done = () => {
  const generatedHtmlContent = generateMyTeamPage(allTeamMembers);
};

const getEngineerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the team Engineer's Name :",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter the team Engg's name.";
          }
        },
      },
      {
        type: "input",
        name: "empId",
        message: "Please enter the team Engineer's Employee Id :",
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
        message: "Please enter the team Engineer's Email Id :",
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
        name: "githubUserName",
        message: "Please enter  team Engineer's github User number :",
        validate: (githubUserName) => {
          if (githubUserName) {
            return true;
          } else {
            return "Please enter username for Github.";
          }
        },
      },
    ])
    .then((responsedata) => {
      console.log(responsedata);
      //   console.log(response.emailId);
      //destructor the object and pass it to manager class
      const { name, empId, emailId, githubUserName } = responsedata;
      //  create an instance of manager with user input
      const engineer = new Engineer(name, empId, emailId, githubUserName);
      // create object of kind manager and add it to allTeamMember array
      const addEngineer = {
        role: engineer.getRole(),
        name: engineer.getName(),
        id: engineer.getId(),
        email: engineer.getEmail(),
        extrafield: engineer.getGithub(),
      };
      //store object in global array
      allTeamMembers.push(addEngineer);
      promptOtherQuestions();
    });
};

const getInternInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the team Intern's Name :",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter the team Intern's name.";
          }
        },
      },
      {
        type: "input",
        name: "empId",
        message: "Please enter the team Intern's Employee Id :",
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
        message: "Please enter the team Intern's Email Id :",
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
        name: "schoolName",
        message: "Please enter team Intern's School name:",
        validate: (schoolName) => {
          if (schoolName) {
            return true;
          } else {
            return "Please enter school name.";
          }
        },
      },
    ])
    .then((responsedata) => {
      console.log(responsedata);
      //   console.log(response.emailId);
      //destructor the object and pass it to manager class
      const { name, empId, emailId, schoolName } = responsedata;
      //  create an instance of manager with user input
      const intern = new Intern(name, empId, emailId, schoolName);
      // create object of kind manager and add it to allTeamMember array
      const addIntern = {
        role: intern.getRole(),
        name: intern.getName(),
        id: intern.getId(),
        email: intern.getEmail(),
        extrafield: intern.getSchool(),
      };
      //store object in global array
      allTeamMembers.push(addIntern);
      promptOtherQuestions();
    });
};

const promptOtherQuestions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message:
          "Please select a team member you would like to add based on role? Please select 'Done' if you are finished building your team . :",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((responsedata) => {
      if (responsedata.employeeType === "Engineer") {
        getEngineerInfo();
      } else if (responsedata.employeeType === "Intern") {
        getInternInfo();
      } else if (responsedata.employeeType === "Done") {
        Done();
      } else {
        //promptOtherQuestions();
      }
    });
};

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
    ])
    .then((responsedata) => {
      console.log(responsedata);
      //   console.log(response.emailId);
      //destructor the object and pass it to manager class
      const { name, empId, emailId, officeNumber } = responsedata;
      //  create an instance of manager with user input
      const manager = new Manager(name, empId, emailId, officeNumber);
      // create object of kind manager and add it to allTeamMember array
      const addManager = {
        role: manager.getRole(),
        name: manager.getName(),
        id: manager.getId(),
        email: manager.getEmail(),
        extrafield: manager.getofficeNumber(),
      };
      //store object in global array
      allTeamMembers.push(addManager);
      promptOtherQuestions();
    });
}

// // Function call to initialize app
startCollectingInfo();
