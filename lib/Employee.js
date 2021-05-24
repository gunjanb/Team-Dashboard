//name,id, email,   getName(), getId(),getEmail (getRole return an 'Emplyoee')

class Employee {
  contructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  getId() {
    return this.id;
  }
}

module.exports = Employee;
