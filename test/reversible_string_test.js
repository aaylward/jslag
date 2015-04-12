require('should');
var ReversibleString = require('../src/reversible_string.js').ReversibleString;

describe('ReversibleString', function() {
  it('should provide the value you give it', function(){
    var fancyString = new ReversibleString('cats');
    var emptyFancyString = new ReversibleString('');
    fancyString.get().should.equal('cats');
    emptyFancyString.get().should.equal('');
  });

  it('should explode on non-string constructor arguments', function() {
    try {
      new ReversibleString();
      should.fail('this should not have worked');
    } catch (error) {
      error.message.should.equal('You must pass a string to ReversibleString constructor.');
    }
  });

  it('should provide reversed strings of odd lengths', function() {
    new ReversibleString('bonky').reversed().should.equal('yknob');
  });

  it('should provide reversed strings of even lengths', function() {
    new ReversibleString('hammer').reversed().should.equal('remmah');
  });

  it('should reverse empty strings', function() {
    new ReversibleString('').reversed().should.equal('');
  });
});
