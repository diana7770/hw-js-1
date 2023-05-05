// switch (lang) {
//   case ua:
//     answer = "січень";
//     break;
//   case en:
//     answer = "January";
//     break;
//   case fr:
//     answer = "Janvier";
//     break;
//   default:
// }
// console.log(answer);

// alert("який з напоїв він бажає придбати - Кава, Чай чи Сік");
// switch (drinks) {
//   case "кава":
//     price = 45;
//     break;
//   case "чай":
//     price = 40;
//     break;
//   case "сік":
//     price = 50;
//     break;
// }
// console.log(price);

const week = prompt("Який день тижня сьогодні?");
switch (week) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    console.log("робочий");
    break;
  case "субота":
  case "неділя":
    console.log("вихідний");
}

for (let i = 1; i <= 10; i += 1) {
  console.log(`${7 * i}`);
}

let namber = 0;
for (let i = 12; i <= 27; i += 1) {
  namber += i;
}
console.log(namber);

let namBer = 1;
for (let i = 3; i <= 9; i += 2) {
  console.log(namBer);
  namBer *= i;
}

for (let i = 1; i <= 100; i += 1) {
  console.log(i);

  if (i === 49) {
    break;
  }
}

for (let i = 10; i <= 30; i += 1) {
  if (i === 15) {
    continue;
  }
  console.log(i);
}

const goods = 10;
let totalPrice = 0;

for (let i = 0; i <= goods; i += 1) {
  let price = Math.floor(Math.random() * 4501) + 500;
  totalPrice = totalPrice + price;
}

console.log(`сумма замовлення ${totalPrice}`);

// через фор

// for (let i = 1; i <= 5; i += 1) {
//     console.log(i)
// }

//  через вайл

// let num = 1;

// while (num <= 5) {
//     console.log(num)
//     num += 1
// }

// через вайл ду

// let num = 1;

// do {
//     console.log(num);
//    num += 1;
// } while (num <= 5);

let nambar;

do {
  nambar = prompt("введіть число більше 100");
} while (nambar <= 100 && nambar !== null);
if (nambar !== null) {
  console.log(`ви ввели число ${num}`);
} else {
  console.log("введеня числа відмінено");
}
