/**
 * 1. var let const 
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. (object.keys, object.values,)es5 (object.entries)es6
 * 7. for of, (useable at array and string)(not useable for object)
 */

const a = 56;
const numbers = [54, 35, 53, 64];
const person = {
 name: "Sakib",
 age: 32
}

const message = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`

const square = x => {
 firstM = x * x;
 secondM = firstM * x;

}

// 5. destructuring and spread operator

// for array
const [first, second, ...remaining] = ["Sakib", "Rakib", "Jisan", "Abdullah", "Masum", "Jabed", "Siddik"]




// for object
const { x, u, ...remainingItem } = { x: 2, y: 5, z: 6, j: 8, u: 9 }