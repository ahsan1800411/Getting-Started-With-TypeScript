abstract class Department {
  // name: string;
  protected employees: string[] = [];
  static FavouriteYear = 2021;
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }
  describe() {
    console.log("IT Department -ID" + this.id);
  }
}

class AccoutingDepartment extends Department {
  private lastReport: string;
  private static instance: AccoutingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else throw new Error("Report not Found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please add an Value");
    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  describe() {
    console.log("Department", this.id);
  }

  static getInstance() {
    if (AccoutingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccoutingDepartment("Wow", []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (this.name === "Ahmad") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("Ahsan Mumtaz");
console.log(employee1, Department.FavouriteYear);

const it = new ItDepartment("d1", ["Ahsan"]);

it.addEmployee("Ahsan");
it.addEmployee("Mumtaz");

it.describe();
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccoutingDepartment("D2", []);
const accounting = AccoutingDepartment.getInstance();
console.log(accounting);

accounting.mostRecentReport = "Last Year We are Passed";
accounting.addReport("Something Went Wrong");

accounting.printReports();
accounting.mostRecentReport;

accounting.describe();

// accounting.addEmployee("Ahsan");
// accounting.printEmployeeInformation();

// const accountingCopy = { name: "Ahsan", describe: accounting.describe };
// accountingCopy.describe();
