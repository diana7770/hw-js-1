// let myName = "Diana";
// myName = myName.replase("D", "@");
// console.log(myName);

const name = "DianaShulha";
console.log(name.indexOf(" "));

let message = "Ваш баланс поповнено на 1";
message = message.padEnd(30, "0");
console.log(message.length);

const result = 5 + 5 + "5";
console.log(typeof result);

const productName = "Droid";
const pricePerItem = 3500;
const messagE = `You picked ${productName}, price per item is ${pricePerItem}`;
console.log(messagE);

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryfee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryfee;
const mesSage = alert(
  `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryfee} credits) is included in total price.`
);
console.log(mesSage);

const courseTopic = "JavaScript essentaials";
const courseTopicLenght = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopicLenght - 1];
console.log(courseTopic);
console.log(courseTopicLenght);
console.log(firstElement);
console.log(lastElement);

const string = "hello,World";
const length = 5;
const substring = string.slice(0, length);
console.log(substring);
