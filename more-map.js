const numbers = [12, 25, 5, 98, 5445, 56, 3];
const doubled = numbers.map(n => n * 2);
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 10);
// console.log(fiveBonus);
const half = numbers.map(num => num / 2)
// console.log(half);


const friends = ["Tom", "John", "Micheal", "Sakib", "Jisan"];
const lengths = friends.map(f => f.length);
// console.log(lengths);
const firstLetter = friends.map(f => f[0]);
const lastLetter = friends.map(f => f[f.length - 1]);
console.log(firstLetter)
console.log(lastLetter)