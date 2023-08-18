const array = [
  {
    balance: 15000,
    name: "Alex",
    friends: ["Taco", "Margo"],
    skills: ["football", "cycling"],
  },
  {
    balance: 10000,
    name: "Alina",
    friends: ["Alex", "Mila", "Derel", "Stepan"],
    skills: ["dansing", "swimming"],
  },
  {
    balance: 2400,
    name: "Olga",
    friends: ["Lia", "Rube"],
    skills: ["cycling", "dansing"],
  },
  {
    balance: 65000,
    name: "Diana",
    friends: ["Ira", "Stefi", "Taco"],
    skills: ["swimming", "football"],
  },
];

//1
const generalBalance = array.reduce(
  (totalBalance, many) => totalBalance + many.balance,
  0
);
console.log(generalBalance);
//2
const friendsOfTaco = array.reduce((totalArray, friend) => {
  if (friend.friends.includes("Taco")) {
    totalArray.push(friend.name);
  }
  return totalArray;
}, []);

console.log(friendsOfTaco);
//3
const friendsSort = array
  .sort(
    (maxFriend, minFriend) =>
      minFriend.friends.length - maxFriend.friends.length
  )
  .map((friendName) => friendName.name);
console.log(friendsSort);
//4
const allSkills = array.reduce((acc, user) => {
  acc.push(...user.skills);
  return acc;
}, []);
allSkills.sort();
const filterSkills = allSkills.filter((skill, index, skillsArray) => {
  return skillsArray.indexOf(skill) === index;
});
console.log(filterSkills);
