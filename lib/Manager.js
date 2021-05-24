class Manager {
  contructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    super(name, id, email);
  }

  getphoneNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
