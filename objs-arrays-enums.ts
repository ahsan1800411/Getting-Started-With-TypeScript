// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const person = {
//   name: "Ahsan",
//   age: 21,
//   hobbies: ["Sports", "Programming"],
//   role: [1, "student"],
// };

enum Role {
  ADMIN,
  AUTHOR,
  MODERATOR,
}
const person = {
  name: "Ahsan",
  age: 21,
  hobbies: ["Sports", "Programming"],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("This is and admin");
}
