const users = [
  {
    id: "user-1",
    name: "Alex",
    gender: "man",
    eyeColor: "blue",
    isActive: true,
    email: "alex@gmail.com",
    age: 30,
  },
  {
    id: "user-2",
    name: "Mary",
    gender: "woman",
    eyeColor: "brown",
    isActive: false,
    email: "mary@gmail.com",
    age: 25,
  },
  {
    id: "user-3",
    name: "Bobik",
    gender: "man",
    eyeColor: "green",
    isActive: false,
    email: "bob@gmail.com",
    age: 16,
  },
];

//1
const usersName = users.map((user) => user.name);
console.log(usersName);
//2
const usersEyeColor = users.map((user) => user.eyeColor);
console.log(usersEyeColor);
//3
const usersGenderMan = users.filter((user) => user.gender === "man");
console.log(usersGenderMan);
//4
const usersIsNotActive = users.filter((user) => !user.isActive);
console.log(usersIsNotActive);
//5
const user = users.find((user) => user.email === "bob@gmail.com");
console.log(user);
//6
const minAge = 16;
const maxAge = 30;
const usersInRange = users.filter(
  (user) => user.age >= minAge && user.age <= maxAge
);
console.log(usersInRange);
