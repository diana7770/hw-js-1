//1
const user = {
  hobby: "dans",
  premium: true,
};
const { mood, hobby, premium } = user;
mood = "happy";
hobby = "skydiving";
premium = false;

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

function countTotalSalary(employees) {
  let totalSalary = 0;
  for (let key in employees) {
    totalSalary += employees[key];
  }
  return totalSalary;
}
console.log(countTotalSalary(employees));
