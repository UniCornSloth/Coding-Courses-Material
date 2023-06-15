// Private: Makes property only accessable from within the class created and any method or function inside the class is able to work with the private Modifyer. Public properties are accessable outside of the classes.
abstract class Department {
  static fiscalYear = 2023;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
// Inhereting only from one class
class ITDepartment extends Department {
  // admins: string[];
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AcountingDepartment extends Department {
  private lastReport: string;
  private static instance: AcountingDepartment;

  // Getter method must always return something
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value.");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AcountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AcountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID:  " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}
// <CODE BEING EXECUTED>
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const IT = new ITDepartment("d1", ["Max"]);

// Adding employee or entry to employee. Example: adding employee name, lastname
// Use a uniform way of adding objects and descriptions
IT.addEmployee("Max");
IT.addEmployee("John");

// Avoid adding objects outside of the Object class Example:
// accounting.employees[2] = "Anna";

// Describing department
IT.describe();
IT.name = "NEW NAME";
// Describing employee information
IT.printEmployeeInfo();
console.log(IT);

// const accounting = new AcountingDepartment("d2", []);
const accounting = AcountingDepartment.getInstance();
// const accounting2 = AcountingDepartment.getInstance();

accounting.mostRecentReport = "Year end report";
accounting.addReport("Something went wrong!");
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("John");
// accounting.printReports();
// accounting.printEmployeeInfo();
accounting.describe();

// const accountingCopy = { name: "Accounting", describe: accounting.describe };
// accountingCopy.describe();
