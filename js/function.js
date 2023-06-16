//1
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//2
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const total = words.length * pricePerWord;
  return total;
};

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
const findLongestWord = function (string) {
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

console.log(findLongestWord("May the force be with you")); // 'force'.

//4
const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // 'Vestibulum facilisis, purus ne...'

console.log(formatString("Curabitur ligula sapien.")); // 'Curabitur ligula sapien.'

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
); // 'Nunc sed turpis. Curabitur a felis in nunc fringil...'

//5
const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();
  return (
    normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
  );
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true.

//6
//-
