class Engineer {
  contructor(name, githubuserName, id, email) {
    this.github = githubuserName;
    super(name, id, email);
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
