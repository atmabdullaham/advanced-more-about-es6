//  the brother of filter;
// 

const players = [75, 65, 78, 88, 85, 45];
const selected = players.find(p => p > 70);
console.log(selected);

/**
 * 1. filter:  returns an array of all elements that satisfy the condition in the callback function.  
 * 
2. find:  returns the first element that satisfies the condition or `undefined` if no match is found.
 */


/**
 * 1. Map: 
 * 2. forEach: 
 * 3. filter: 
 * 4. find: 
 */

/**
 * Differences and Similarities:
map:--

Purpose: Transforms each element and returns a new array.
Returns: A new array with modified elements.

forEach:---

Purpose: Iterates over elements for performing side effects (e.g., logging, updating a variable).
Returns: undefined (does not return a new array).

filter:---

Purpose: Selects elements that match a condition.
Returns: A new array with elements that satisfy the condition.


find:---

Purpose: Finds the first element that matches a condition.
Returns: The first matching element, or undefined if no match is found.


_______Similarities:_____
1. All except forEach: Return values (map, filter, and find return new data, while forEach does not).
2. Callback Function: All use a callback function that processes each element in the array.
 */