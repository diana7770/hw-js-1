//dz 11:
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//2
const calculateEngravingPrice = (message, pricePerWord) =>
  message.split(" ").length * pricePerWord;

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120.

//3
const findLongestWord = (string) => {
  const words = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

//4
const formatString = (string) =>
  string.length <= 40 ? string : string.slice(0, 40) + "...";

console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // 'Vestibulum facilisis, purus ne...'

console.log(formatString("Curabitur ligula sapien.")); // 'Curabitur ligula sapien.'

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
); // 'Nunc sed turpis. Curabitur a felis in nunc fringil...'

//5 доробити
const checkForSpam = (message) => {
  const normalizedMessage = message.toLowerCase();
  return (
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
  );
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true.
//dz12

//1
const makePizza = () => "Your pizza is being prepared, please wait.";

// Change code below this line

const result = console.log(
  makePizza("Your pizza is being prepared, please wait.")
);

const pointer = console.log(makePizza);

//3
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
//}

//4
const buttonRef = document.querySelector("[data-button]");
function showInfo() {
  return alert("Hello World!");
}
buttonRef.addEventListener("click", showInfo);

// 5
// const buttonref = document.querySelector("[data-button]");
// let click = 0;

// function buttonClickNum() {
//   click += 1;
//   console.log(click);
// }

// buttonref.addEventListener("click", buttonClickNum);

// 7

// const calculateDiscountedPrice = function(price, discount, callback) {
//   const discountedPrice = price * (1 - discount / 100);
//   return callback(discountedPrice);
// }

// const showDiscountedPrice = function(discountedPrice) {
//   return Discounted price: ${discountedPrice};
// }

// console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice)); // Discounted price: 90
