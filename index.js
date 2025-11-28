const add = (a, b) => a + b;
const addFromArray = (arr) => arr.reduce((acc, curr) => add(acc, curr), 0);

// Updated by feat
const multiply = (a, b) => a * b;

console.log('The result of 2 + 3 is: ' + add(2, 3));
console.log('The result of 2 * 3 is: ' + multiply(2, 3));
console.log('The result of [1, 2, 3] is: ' + addFromArray([1, 2, 3]));
// Updated by feat1

// second update by feat1
module.exports = {
  add,
  multiply
};
