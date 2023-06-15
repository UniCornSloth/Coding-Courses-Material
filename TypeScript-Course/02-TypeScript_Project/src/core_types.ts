// const person: {
//   name: string;
//   age: number;
// } = {
// Object Type assignments
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // Tuple Type
//   role: [number, string];
// } = {
//   // Object type inferance
//   name: "Herling",
//   age: 31,
//   hobbies: ["Sports", "Cooking"],
//   // Tuple Type
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "Herling",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("Admin");
// person.role[1] = "10";
// person.role = [0, "admin", "user"];

let faveActivities: string[];
faveActivities = ["Sports"];
console.log(person.name, person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("Herling is admin");
}
