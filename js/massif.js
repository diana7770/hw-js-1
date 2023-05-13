//1
const numbers = [22, 16, 8];
numbers[2] = 10;
console.log(numbers);

//2
const text = ["on", "in", "under"];
for (let i = " "; i < text.length; i += " ") {
  console.log(text[i]);
  text[i] = text + `by ${i}`;
  console.log(text[i] + `by ${i}`);
}
//3
//не знаю як робити

//4
const clients = ["Maria", "Alex", "Oleg"];

for (const client of clients) {
  console.log(client);
}

//5
const strings = ["a", "aa", "aaa", "aaaa", "aaaaa"];
for (let i = 0; i < strings.length; i++) {
  if (strings[i].length >= 5) {
    console.log(strings[i]);
  }
}

//6
let more = [1, 3, 5, 8, 56, 9, 6, 80, 10, 100];
console.log(more);
let maxMore = more[0];
for (let i = 0; i < more.length; i++) {
  if (more[i] > maxMore) {
    maxMore = more[i];
  }
}
console.log(maxMore);

//7
let numbs = [1, 3, 5, 8, 56, 9, 6, 80, 10, 100];
let total = 0;
for (let i = 0; i < numbs.length; i += 1) {
  if (numbs[i] % 2 === 0) {
    console.log(numbs[i]);
  }
}
console.log();
