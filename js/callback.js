//1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// // Change code below this line

// const result = console.log(
//   makePizza("Your pizza is being prepared, please wait.")
// );

// const pointer = console.log(makePizza);

// //2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

//3
// function makePizza(pizzaName, callback) {

//     console.log(Pizza ${pizzaName} is being prepared, please wait...);

//     callback(pizzaName);

//   }

//   makePizza("Royal Grand", function deliverPizza(pizzaName) {

//     console.log(Delivering pizza ${pizzaName}.);

//   });

//   // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {

//     console.log(Eating pizza ${pizzaName}.);

//   });

//4
// const buttonRef = document.querySelector("[data-button]");
// function showInfo() {
//   alert("Hello World!");
// }
// buttonRef.addEventListener("click", showInfo);

//5
// const buttonref = document.querySelector("[data-button]");
// let click = 0;

// function buttonClickNum() {
//   click += 1;
//   console.log(click);
// }

// buttonref.addEventListener("click", buttonClickNum);

//6 -

//7

// const calculateDiscountedPrice = function(price, discount, callback) {
//   const discountedPrice = price * (1 - discount / 100);
//   return callback(discountedPrice);
// }

// const showDiscountedPrice = function(discountedPrice) {
//   return Discounted price: ${discountedPrice};
// }

// console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice)); // Discounted price: 90
