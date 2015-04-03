var Stack = require('./stack').Stack;

/*
 * only works for positive numbers
 */
function dec2bin(number) {
  var stack = new Stack(),
      remainingValue = number,
      outputArray = [];

  if (number < 0) {
    throw new Error('this only works for non-negative numbers');
  } else if (number === 0) {
    return '0';
  }

  while (remainingValue > 0) {
    stack.push(remainingValue % 2);
    remainingValue = Math.floor(remainingValue / 2);
  }

  while (!stack.isEmpty()) {
    outputArray.push(stack.pop());
  }

  return outputArray.join('');

}

module.exports = {
  dec2bin: dec2bin
};

