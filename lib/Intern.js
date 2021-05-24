class Intern {
  contructor(name, id, email, school) {
    this.school = school;
    super(name, id, email);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
