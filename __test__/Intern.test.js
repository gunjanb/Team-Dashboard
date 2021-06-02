const Intern = require("../lib/intern.js");

describe("Intern", () => {
  // Test for all use cases when initializing a new Engineer object
  describe("Initialization", () => {
    it("should create an object with a name ,id ,email and school", () => {
      const intern = new Intern("Gunjan", 1, "gunjan@gmail.com", "UW");

      // Verify that the new object has the correct properties
      expect(intern.name).toEqual("Gunjan");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("gunjan@gmail.com");
      expect(intern.school).toEqual("UW");
    });
  });

  describe("getName", () => {
    it("should return the name of an intern", () => {
      // Create new objects to test with
      const intern = new Intern("Gunjan", 1, "gunjan@gmail.com", "UW");

      // Verify that the intern name is returned correctly
      expect(intern.getName()).toEqual("Gunjan");
    });
  });

  describe("getId", () => {
    it("should return the Id of an  intern", () => {
      // Create new objects to test with
      const intern = new Intern("Gunjan", 1, "gunjan@gmail.com", "UW");

      // Verify that the intern id is returned correctly
      expect(intern.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the  email of an  intern", () => {
      // Create new objects to test with
      const intern = new Intern("Gunjan", 1, "gunjan@gmail.com", "UW");

      // Verify that the   intern email is returned correctly
      expect(intern.getEmail()).toEqual("gunjan@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return the role of an  intern", () => {
      // Create new objects to test with
      const intern = new Intern("Gunjan", 1, "gunjan@gmail.com", "UW");

      // Verify that the  intern role is returned correctly
      expect(intern.getRole()).toEqual("Intern");
    });
  });

  describe("getschool", () => {
    it("should return the  school of an  intern", () => {
      // Create new objects to test with
      const intern = new Intern("Gunjan", 1, "gunjan@gmail.com", "UW");

      // Verify that the engineer email is returned correctly
      expect(intern.getSchool()).toEqual("UW");
    });
  });
});
