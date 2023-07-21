//1
function personInfo(person) {
  const { name, surname, age } = person;
  return `Мене звати ${name} ${surname} і мені ${age} років`;
}
const person = {
  name: "Nelli",
  surname: "Laroy",
  age: 25,
};
console.log(personInfo(person));

//2
function calculateAverageGrade(student) {
  const { name, surname, grades } = student;
  const averageGrade =
    grades.reduce((total, grade) => total + grade, 0) / grades.length;
  return `Студент ${name} ${surname} має середній бал ${averageGrade}`;
}
const student = {
  name: "Bruce",
  surname: "Lee",
  grades: [4, 5, 3],
};

console.log(calculateAverageGrade(student));
//3
function getFirstEmail({ emails }) {
  const [firstEmail] = emails;
  return firstEmail;
}
const personn = {
  name: "John",
  emails: ["john@gmail.com", "john@example.com", "john123@yahoo.com"],
};
console.log(getFirstEmail(personn));
//4
function getAdultUsers({ users }) {
  const adultUsers = users.filter((user) => user.age > 18);
  return adultUsers;
}
const data = {
  users: [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 20 },
  ],
};
console.log(getAdultUsers(data));
//5
// const { count, artists: [{ name: name1, albums: [{ title: title1, year: year1, tracks: [{ title: title2, title: title3, title: title4 }] }, { title: title5, year: year2, tracks: [{ title: title6, title: title7, title: title8 }] },
//                          { name: name2, albums: [{ title: title9, year: year3, tracks: [{ title: title10, title: title11, title: title12 }] }, { title: title13, year: year4, tracks: [{ title: title14, title: title15, title: title16 }] },] } = musicLibrary;
