const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
const myNewArray = [ 5, 8, 5, ...numbers ]

console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]
console.log(myNewArray);