const balance = 10000000000;
let massage = "1";
if (balance > 0) {
  massage = "Позитивний баланс!";
} else {
  massage = "Поповніть рахунок";
}
//якщо let message = "1"; буде не в іфі, то він не буде входити у область видимості,
//а якщо буде лежати в іф, то буде входити у область видимості
console.log(massage);

const question = prompt("Яка “офіційна” назва JavaScript?");
if (question === "ECMAScript") {
  const message = alert("Правильно!");
} else {
  const message = alert("Ви не знаєте? ECMAScript!");
}
console.log(question);

const isOnline = false;
const isFriend = true;
const isDnd = false;

if (isDnd === false && isOnline === true && isFriend === true) {
  const message = true;
} else {
  const message = false;
}

console.log(isFriend);

const free = "free";
const pro = "pro";
const vip = "vip";
const list = 0;

if (free === pro) {
  const message = alert("вас допущено до контенту рівню pro");
} else if (free === vip) {
  const message = alert("вас допущено до контенту рівню vip");
} else {
  const message = alert("недопуск до контенту");
}
console.log(list);

const num = prompt("Введіть число:");

if (num >= 55 && number <= 99) {
  const list = alert("Число в діапазоні");
} else {
  const list = alert("Число не в діапазоні");
}

console.log(num);

const maksym = 55;

if (maksym >= 0 && max <= 16) {
  const group = alert("максим в групі діти");
} else if (maksym >= 17 && max <= 60) {
  const group = alert("максим в групі дорослі");
} else if (maksym >= 61 && max <= 100) {
  const group = alert("максим в групі пенсіонери");
}
console.log(maksym);
