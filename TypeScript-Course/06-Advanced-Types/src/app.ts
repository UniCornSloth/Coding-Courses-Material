// Code goes here!
interface Admin {
  name: string;
  privelages: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

// type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privelages: ["create-servers"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
// Function overload

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // TypeGaurd using typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Schwarz");
result.split(" ");
// console.log(add("Max ", 4));

// Optional Chaining helps us access nested ojects in the databasis
// Nullish coalescing
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My Company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";
console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privelages" in emp) {
    console.log("Privelages: " + emp.privelages);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

printEmployeeInfo({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving a car...");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

// Union Types
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle)  or
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Descriminated Union, available when working with object types

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;

      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "horse", runningSpeed: 15 });

// Type Casting
// const paragraph = document.querySelector("p");
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

// userInputElement.value = "Hi there!";

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi There!";
}

// Index Properties
interface ErrorContainer {
  // { email: ' Not a valid email!', username: 'Must start with a character!' }
  // This must be a flexible container
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
