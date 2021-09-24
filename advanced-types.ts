type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Ahsan",
  privileges: ["Admin"],
  startDate: new Date(),
};

type CombineAble = string | number;
type Numeric = number | boolean;

type Universal = CombineAble & Numeric;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: CombineAble, b: CombineAble) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 2);

// const fetchUserData = {
//   id: "1",
//   name: "Ahsan",
//   job: { title: "Programmer", description: "He is the good programmer" },
// };
// console.log(fetchUserData?.job?.title);

const userInput = "";

const storeData = userInput ?? "Default";
console.log(storeData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name " + emp.name);
//   if ("startDate" in emp) {
//     console.log("startDate" + emp.startDate);
//   }
//   if ("privileges" in emp) {
//     console.log("Privileges" + emp.privileges);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving a Car");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a Truck");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading " + amount);
//   }
// }

// const v1 = new Car();
// const v2 = new Truck();

// type Vehicle = Car | Truck;

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;

//       break;

//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Running at" + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // type casting

// const userInput = document.getElementById("user-input")! as HTMLInputElement;

// userInput.value = "Hi There";

// // index properties
// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Must be a Valid Email",
//   username: "Username must be start with a capital letter",
// };
