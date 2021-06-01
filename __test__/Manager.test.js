const Manager = require("../lib/manager.js");

describe("Manager", () => {
  // Test for all use cases when initializing a new Engineer object
  describe("Initialization", () => {
    it("should create an object with a name ,id ,email and office no", () => {
      const manager = new Manager("Gunjan", 1, "gunjan@gmail.com", 123456);

      // Verify that the new object has the correct properties
      expect(manager.name).toEqual("Gunjan");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("gunjan@gmail.com");
      expect(manager.officeNumber).toEqual(123456);
    });
  });

  describe("getName", () => {
    it("should return the name of an manager", () => {
      // Create new objects to test with
      const manager = new Manager("Gunjan", 1, "gunjan@gmail.com", 123456);

      // Verify that the manager name is returned correctly
      expect(manager.getName()).toEqual("Gunjan");
    });
  });

  describe("getId", () => {
    it("should return the Id of an  manager", () => {
      // Create new objects to test with
      const manager = new Manager("Gunjan", 1, "gunjan@gmail.com", 123456);

      // Verify that the manager id is returned correctly
      expect(manager.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the  email of an  manager", () => {
      // Create new objects to test with
      const manager = new Manager("Gunjan", 1, "gunjan@gmail.com", 123456);

      // Verify that the   manager email is returned correctly
      expect(manager.getEmail()).toEqual("gunjan@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return the role of an  manager", () => {
      // Create new objects to test with
      const manager = new Manager("Gunjan", 1, "gunjan@gmail.com", 123456);

      // Verify that the  manager role is returned correctly
      expect(manager.getRole()).toEqual("Manager");
    });
  });

  describe("get Officen no", () => {
    it("should return the  office number of an  manager", () => {
      // Create new objects to test with
      const manager = new Manager("Gunjan", 1, "gunjan@gmail.com", 123456);

      // Verify that the engineer email is returned correctly
      expect(manager.getofficeNumber()).toEqual(123456);
    });
  });
});
