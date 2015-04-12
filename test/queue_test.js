require('should');
var Queue = require('../src/queue').Queue;

describe('Queue', function() {
  it('should be empty when you create it', function() {
    var q = new Queue();
    q.size().should.equal(0);
    q.isEmpty().should.equal(true);
  });

  it('should work', function() {
    var q = new Queue();
    for (var i=1; i<=5; i++) {
      q.enqueue(i);
    }

    q.peek().should.equal(1);
    q.dequeue().should.equal(1);
    q._items().length.should.equal(5); // should not have resized

    q.dequeue().should.equal(2);
    q.dequeue().should.equal(3);

    q.size().should.equal(2);
    q._items().length.should.equal(5); // should not have resized
    q.dequeue().should.equal(4);
    
    q.size().should.equal(1);
    q._items().length.should.equal(1); // should have resized
  });
});
