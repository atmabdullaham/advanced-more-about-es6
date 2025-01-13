//  map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.

// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.



const numbers = [23, 34, 534, 65, 654, 75];


// 1st way to double it,
function doubleIt(num) {
 return num * 2;
}
const result = numbers.map(doubleIt);
// console.log(result)




// 2nd way to double it, 
const double2 = n => n * 2
const output = numbers.map(double2)
// console.log(output)



// 3rd way to double it,
const output2 = numbers.map(n => n * 2);
console.log(output2);

// ___ previous way

// const doubled = [];
// for (const number of numbers) {
//  const double = number * 2;
//  doubled.push(double);
// }

// console.log(doubled)