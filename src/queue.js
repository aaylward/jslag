function Queue() {
  var items = [],
      first = 0,
      last  = 0;

  this.enqueue = function(item) {
    items[last++] = item;
  };

  this.dequeue = function() {
    if (this.size() === 0) {
      throw new Error('cannot dequeue on empty queue');
    }
    var item = items[first];
    items[first++] = undefined;

    if (this.size() < items.length/4) {
      resize();
    }

    return item;
  };

  this.size = function() {
    return last - first;
  };

  this.peek = function() {
    return items[first];
  };

  this.isEmpty = function() {
    return this.size() === 0;
  };

  //visible for testing
  this._items = function() {
    return items;
  };

  function resize() {
    var newItems = [],
        i = first;

    while (i < last) {
      newItems.push(items[i++]);
    }

    items = newItems;
  }
}

module.exports = {Queue: Queue};

