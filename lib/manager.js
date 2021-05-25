// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// officeNumber and getRole() overridden to return `'Manager'`
const Employee = require("./employee.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getofficeNumber() {
    return this.getofficeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
