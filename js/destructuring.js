//1
const user = {
  hobby: "dans",
  premium: true,
};

mood = "happy";
hobby = "skydiving";
premium = false;

const { mood, hobby, premium } = user;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

//2
function countProps(obj) {
  return Object.keys(obj).length;
}

// або скоротити запис

const countProps = (obj) => Object.keys(obj).length;
console.log(countProps(obj));

//3
const workers = {
  David: 80,
  Dasha: 20,
  Dima: 40,
};

const { David, Dasha, Dima } = workers;

const findBestWorkers = function (workers) {
  let bestWorker = 0;
  let bestWorke = "";
  const arrWorkers = Object.keys(workers);
  for (const worke of arrWorkers) {
    if (bestWorker < workers[worke]) {
      bestWorker = workers[worke];
      bestWorke = worke;
    }
  }
  return `${bestWorke}: ${bestWorker}`;
};
console.log(findBestWorkers(workers));

//4
const employees = {
  John: 5000,
  Janet: 2700,
  Mike: 1400,
};
const { John, Janet, Mike } = employees;

function countTotalSalary(employees) {
  let totalSalary = 0;
  for (let key in employees) {
    totalSalary += employees[key];
  }
  return totalSalary;
}
console.log(countTotalSalary(employees));

// 5
const arr = [
  {
    namem: "soks",
    prise: 50,
  },
  {
    namem: "dress",
    prise: 175,
  },
  {
    namem: "blause",
    prise: 64,
  },
];

const [
  { name: namem1, prise: prise1 },
  { name: namem2, prise: prise2 },
  { name: namem3, prise: prise3 },
] = arr;

function getAllPropValues(arr, prop) {
  let propValues = [];
  for (let obj of arr) {
    if (prop in obj) {
      propValues.push(obj[prop]);
    }
  }
  return propValues;
}
console.log(getAllPropValues(arr, "prise"));
console.log(getAllPropValues(arr, "name"));

//6
function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice += product.price * product.quantity;
    }
  }

  return totalPrice;
}

const products = [
  { name: "ice cream", price: 10, quantity: 2 },
  { name: "juice", price: 5, quantity: 3 },
  { name: "sausages", price: 8, quantity: 1 },
];
console.log(calculateTotalPrice)(products, "ice cream");
console.log(calculateTotalPrice)(products, "juice");
console.log(calculateTotalPrice)(products, "sausages");

//7
