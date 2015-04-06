require('should');
var Stack = require('../src/stack').Stack;

describe('Stack', function() {
  it('should be empty when you create it', function() {
    var stack = new Stack();
    stack.size().should.equal(0);
    stack.isEmpty().should.equal(true);
  });

  it('should work', function() {
    var stack = new Stack();
    for (var i=1; i<=5; i++) {
      stack.push(i);
    }

    stack.pop().should.equal(5);
    stack.pop().should.equal(4);
    stack.pop().should.equal(3);

    stack.size().should.equal(2);
    stack.pop().should.equal(2);
    
    stack.size().should.equal(1);
    stack.isEmpty().should.equal(false);

    stack.pop().should.equal(1);
    stack.isEmpty().should.equal(true);
  });
});
