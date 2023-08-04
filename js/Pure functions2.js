//1
function firstLastLetters(arr) {
  return arr.reduce((result, str) => {
    const first = str[0];
    const last = str[str.length - 1];
    result.push(first + last);
    return result;
  }, []);
}

const array2 = [
  "apple",
  "banana",
  "orange",
  "banana",
  "grape",
  "apple",
  "kiwi",
];
console.log(firstLastLetters(array2));

//2
const people = [
  { name: "John", surname: "Doe", age: 32, occupation: "programmer" },
  { name: "Jane", surname: "Lee", age: 26, occupation: "teacher" },
  { name: "Mike", surname: "Watson", age: 42, occupation: "engineer" },
  { name: "Emily", surname: "Brad", age: 29, occupation: "designer" },
];

const peopleWithFullName = people.map((person) => {
  const fullName = `${person.name} ${person.surname}`;
  return { id: person.id, fullName };
});

console.log(peopleWithFullName);
