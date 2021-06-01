const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  // Test for all use cases when initializing a new Engineer object
  describe("Initialization", () => {
    it("should create an object with a name ,id ,email and Github", () => {
      const engineer = new Engineer("Gunjan", 1, "gunjan@gmail.com", "gunjan");

      // Verify that the new object has the correct properties
      expect(engineer.name).toEqual("Gunjan");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("gunjan@gmail.com");
      expect(engineer.github).toEqual("gunjan");
    });
  });

  describe("getName", () => {
    it("should return the name of an engineer", () => {
      // Create new objects to test with
      const engineer = new Engineer("Gunjan", 1, "gunjan@gmail.com", "gunjan");

      // Verify that the engineer name is returned correctly
      expect(engineer.getName()).toEqual("Gunjan");
    });
  });

  describe("getId", () => {
    it("should return the Id of an engineer", () => {
      // Create new objects to test with
      const engineer = new Engineer("Gunjan", 1, "gunjan@gmail.com", "gunjan");

      // Verify that the engineer id is returned correctly
      expect(engineer.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the email of an engineer", () => {
      // Create new objects to test with
      const engineer = new Engineer("Gunjan", 1, "gunjan@gmail.com", "gunjan");

      // Verify that the engineer email is returned correctly
      expect(engineer.getEmail()).toEqual("gunjan@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return the role of an engineer", () => {
      // Create new objects to test with
      const engineer = new Engineer("Gunjan", 1, "gunjan@gmail.com", "gunjan");

      // Verify that the engineer  role is returned correctly
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });

  describe("getGithub", () => {
    it("should return the githubname of an engineer", () => {
      // Create new objects to test with
      const engineer = new Engineer("Gunjan", 1, "gunjan@gmail.com", "gunjan");

      // Verify that the engineer email is returned correctly
      expect(engineer.getGithub()).toEqual("gunjan");
    });
  });
});
