// filter selects elements based on a condition and returns an arry with that fulfilled the condition.


//   * 1. filter:  returns an array of all elements that satisfy the condition in the callback function. 

const numbers = [1, 54, 52, 12, 75, 65]
const players = [75, 65, 78, 88, 85, 45];

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
const selected = players.filter(p => p % 2 === 1);
// console.log(selected);

const friends = ["Tom", "John", "Micheal", "Sakib", "Jisan"];


const oddFriends = friends.filter(f => f.length > 4);
console.log(oddFriends);
