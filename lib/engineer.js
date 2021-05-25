// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
// github for GitHub username , getGithub() ,getRole() overridden to return `'Engineer'`
const Employee = require("./employee.js");
class Engineer extends Employee {
  constructor(name, id, email, githubUserName) {
    super(name, id, email);
    this.github = githubUserName;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
