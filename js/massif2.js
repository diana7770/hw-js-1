//1
const end = [1, 2, 3];
end.splice(3, 0, 4, 5, 6);
console.log(end);
//або
const endd = [1, 2, 3];
endd.push(4, 5, 6);
console.log(endd);

const start = [1, 2, 3];
start.splice(0, 0, 4, 5, 6);
console.log(start);

const word = ["js", "css", "jq"];
console.log(word[0]);

const word2 = ["js", "css", "jq"];
console.log(word2[2]);

const newNumber = [1, 2, 3, 4, 5];
console.log(newNumber.slice(0, 3));

const newNumber2 = [1, 2, 3, 4, 5];
console.log(newNumber2.slice(3, 5));

//2

const fruits = ["ківі", "банан", "яблуко", "груша"];
fruits.shift();
fruits.unshift("малина");
fruits.pop();
fruits.push("полуниця");
fruits.splice(2, 1, "апельсин", "кавун");
alert(fruits);

//3

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.splice(1, 1, "Класика");
styles.shift();
styles.unshift("Джаз");
styles.splice(0, 0, "Реп", "Реггі");
console.log(styles);
