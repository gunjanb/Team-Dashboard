const Employee = require("../lib/employee.js");

describe("Employee", () => {
  // Test for all use cases when initializing a new Employee object
  describe("Initialization", () => {
    it("should create an object with a name ,id and email ", () => {
      const employee = new Employee("Gunjan", 1, "gunjan@gmail.com");

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual("Gunjan");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("gunjan@gmail.com");
    });
  });

  describe("getName", () => {
    it("should return the name of an employee", () => {
      // Create new objects to test with
      const employee = new Employee("Gunjan", 1, "gunjan@gmail.com");

      // Verify that the emplyoee name is returned correctly
      expect(employee.getName()).toEqual("Gunjan");
    });
  });

  describe("getId", () => {
    it("should return the Id of an employee", () => {
      // Create new objects to test with
      const employee = new Employee("Gunjan", 1, "gunjan@gmail.com");

      // Verify that the emplyoee Id is returned correctly
      expect(employee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the email of an employee", () => {
      // Create new objects to test with
      const employee = new Employee("Gunjan", 1, "gunjan@gmail.com");

      // Verify that the emplyoee email id  is returned correctly
      expect(employee.getEmail()).toEqual("gunjan@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return the role of an employee", () => {
      // Create new objects to test with
      const employee = new Employee("Gunjan", 1, "gunjan@gmail.com");

      // Verify that the emplyoee role is returned correctly
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
