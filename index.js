const add = (a, b) => a + b;

const addFromArray = (arr) => arr.reduce((acc, curr) => add(acc, curr), 0);

console.log('The result of 2 + 3 is: ' + add(2, 3));
console.log('The result of [1, 2, 3] is: ' + addFromArray([1, 2, 3]));