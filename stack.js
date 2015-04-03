/*
 * LIFO Stack
 */
function Stack() {
  var items = [];
  var currentIndex = 0;

  this.push = function(element /*, others */) {
    items[currentIndex++] = element;
  };

  this.pop = function() {
    if (currentIndex === 0) {
      throw new Error('Cannot pop off empty stack!');
    }
    var item = items[--currentIndex];
    delete items[currentIndex];
    return item;
  };

  this.peek = function() {
    return items[currentIndex - 1];
  };

  this.isEmpty = function() {
    return currentIndex < 1;
  };

  this.clear = function() {
    items = [];
    currentIndex = 0;
  };

  this.size = function() {
    return currentIndex;
  };

  this.print = function() {
    console.log(items.toString());
  };

}

module.exports = {
  Stack: Stack
};

