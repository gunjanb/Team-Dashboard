const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMyTeamPage = require("./src/generatehtml.js");

const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const regexNumber = /^[1-9]*\d$/;
// an array to store manager and other team memebers which can be engg and intern from user
//and passed to generateMyTeamPage
allTeamMembers = [];

// function to copy css file
function copycssFile() {
  fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
    err
      ? console.log(err)
      : console.log(
          "\n" +
            "            *************** Style sheet copied successfully *************************\n"
        );
  });
}

//  function to write  file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log(
          "\n" +
            "            *************** Successfully generated Team DashBoard HTML **************\n"
        )
  );
}

const Done = () => {
  const generatedHtmlContent = generateMyTeamPage(allTeamMembers);
  // copycssFile();
  writeToFile("./dist/index.html", generatedHtmlContent);
};

const getEngineerInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter team's EngineerName :",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter the team's Engg name.";
          }
        },
      },
      {
        type: "input",
        name: "empId",
        message: "Please enter the team's Engineer EmployeeId :",
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
        message: "Please enter the team's Engineer EmailId :",
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
        message: "Please enter team's Engineer github user name :",
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
      //destructor the object and pass it to engg class
      const { name, empId, emailId, githubUserName } = responsedata;
      //  create an instance of engg with user input
      const engineer = new Engineer(name, empId, emailId, githubUserName);
      //create an object for allTeamMmenber having info from engg object
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
        message: "Please enter the team's Intern Name :",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter the team's Intern name.";
          }
        },
      },
      {
        type: "input",
        name: "empId",
        message: "Please enter the team's Intern EmployeeId :",
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
        message: "Please enter the team's Intern EmailId :",
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
      //destructor the object and pass it to inter class
      const { name, empId, emailId, schoolName } = responsedata;
      //  create an instance of manager with user input
      const intern = new Intern(name, empId, emailId, schoolName);
      //create an object for allTeamMmenber having info from intern object
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
      }
    });
};

//function to ask and collect data for manager
function startCollectingInfo() {
  //welcome msg
  console.log(
    "\n" +
      "            ******************** Welcome to Team Dashboard **************************\n"
  );
  console.log(
    "            ********************    Create your Team       **************************\n"
  );
  //collect manager info and add to allteammember array
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
        message: "Please enter the team Manager's EmailId :",
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
      // console.log(responsedata);
      //destructor the object and pass it to manager class
      const { name, empId, emailId, officeNumber } = responsedata;
      //create an instance of manager with user input
      const manager = new Manager(name, empId, emailId, officeNumber);
      // create an object for allTeamMmenber having info from manager object
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

// Function call to initialize app
startCollectingInfo();
