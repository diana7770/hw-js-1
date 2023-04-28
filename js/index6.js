const firstName = "Oleg".length;
const lastName = "Bondarenko".length;
let list;

if (firstName >= 4 && lastName >= 5) {
  const list = alert(firstName + lastName);
} else {
  const list = alert("ой я не можу виконати умову");
}

console.log(list);

let a = 2;
let b = 1;

// if (a + b < 4) {

//  result = 'Нижче';

// } else {

//  result = 'Вище';
// }

let result = a + b < 4 ? "Нижче" : "Вище";

console.log(result);

// if ("0") {
//     console.log( 'Привіт' );
//    }

// в консолі буде Привіт
