'use strict';

/*
  00_IntroArray.js
  A short, runnable script that teaches JavaScript arrays.
  Run: node 00_IntroArray.js
*/

console.log('--- JavaScript Arrays: Intro ---');

// 1) What is an array?
// - Ordered collection of values (can contain mixed types)
const arrLiteral = [1, 'two', true, { name: 'JS' }];
console.log('array literal:', arrLiteral);

// 2) Creating arrays
const empty = [];
const numbers = [10, 20, 30];
const fromConstructor = new Array(3); // length 3, empty slots
console.log('empty:', empty, 'numbers:', numbers, 'constructor:', fromConstructor);

// 3) Accessing elements & length
console.log('first:', numbers[0], 'length:', numbers.length, 'last:', numbers[numbers.length - 1]);

// 4) Mutating arrays (push/pop, shift/unshift)
numbers.push(40); // add to end
console.log('after push:', numbers);
const popped = numbers.pop(); // remove from end
console.log('popped:', popped, 'numbers:', numbers);
numbers.unshift(5); // add to front
console.log('after unshift:', numbers);
const shifted = numbers.shift(); // remove from front
console.log('shifted:', shifted, 'numbers:', numbers);

// 5) splice (mutate) and slice (non-destructive)
const letters = ['a','b','c','d','e'];
const removed = letters.splice(1, 2); // remove 2 items at index 1
console.log('after splice (mutated):', letters, 'removed:', removed);
const copy = letters.slice(0, 2); // shallow copy of a portion
console.log('slice (non-mutating): original still', letters, 'copy:', copy);

// 6) concat, spread operator, and copying
const more = letters.concat(['x','y']);
console.log('concat result:', more);
const spreadCopy = [...more];
console.log('spread copy:', spreadCopy);

// 7) Finding and testing: indexOf, includes, find, filter
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 34 },
  { name: 'Carol', age: 27 }
];
console.log('indexOf:', [1,2,3].indexOf(2));
console.log('includes:', [1,2,3].includes(2));
console.log('find by age>25:', people.find(p => p.age > 25));
console.log('filter age>25:', people.filter(p => p.age > 25));

