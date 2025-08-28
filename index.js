const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

console.log('The result of 2 + 3 is: ' + add(2, 3));
console.log('The result of 2 * 3 is: ' + multiply(2, 3));

module.exports = {
  add,
  multiply
};