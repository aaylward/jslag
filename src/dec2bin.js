var Stack = require('./stack').Stack;

/*
 * only works for positive numbers
 */
function dec2bin(number, quiet) {
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

  if (quiet) {
    // just print, use less memory and don't return anything
    printButDontReturn(stack);
    return;
  }

  while (!stack.isEmpty()) {
    // this seems better that +=-ing a string
    outputArray.push(stack.pop());
  }

  return outputArray.join('');

}

function printButDontReturn(stack) {
  while (!stack.isEmpty()) {
    process.stdout.write('' + stack.pop());
  }
  process.stdout.write('\n');
}

module.exports = {
  dec2bin: dec2bin
};

