// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// school , getSchool() and getRole() overridden to return `'Intern'`
const Employee = require("./employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
