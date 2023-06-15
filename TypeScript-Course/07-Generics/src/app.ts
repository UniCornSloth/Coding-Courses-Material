// Code goes here!
// Generic types
// An Array knows what data it stores
/*
const names: Array<string> = ["Max"]; // string[]
names[0].split(" ");

// Promise type
// A promise knows what data it returns
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  // data.split(" ");
});
*/

// Creating a generic function and working with Constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("10"));

// Constraints
// A constraint is a function that returns a boolean: true / false
// A constraint can be used to restrict the possible values of a propery
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

// Generic Classes
// A generic class is a class that has a generic type parameter
// Generic
// Generic types are not constrained by the compiler, but can be used to create generic functions
// This is a simple generic Class
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  // Adding item to array
  addItem(item: T) {
    this.data.push(item);
  }
  // Removing item form array
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  // Getting item form array
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("10");
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// Generic Utility Types
// Utility types are types that have a generic type paramareter
// Generic Utility types are not constrained by the compiler, but can be used to create generic functions
// This is a simple generic Utility type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Using Readonly prevents you from adding or removing anything from ot to array
const names: Readonly<string[]> = ["Max", "Anna"];

// Generic verses Union types
class DataStorage2 {
  // Can have array with strings numbers and booleans mixed
  private data: (string | number | boolean)[] = [];
  // Adding item to array
  addItem(item: string | number | boolean) {
    this.data.push(item);
  }
  // Removing item form array
  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  // Getting item form array
  getItems() {
    return [...this.data];
  }
}
