function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};

function calculate(a, operator, b) {
  if (!operations[operator]) {
    throw new Error('Invalid operator'); //Improved error handling
  }
  return operations[operator](a, b);
}

console.log(calculate(5, '+', 3)); // 8
console.log(calculate(10, '-', 4)); // 6
console.log(calculate(7, '*', 2)); // 14
console.log(calculate(9, '/', 0)); // throws error
console.log(calculate(5, '%', 2)); // throws error