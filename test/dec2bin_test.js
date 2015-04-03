require('should');
var dec2bin = require('../src/dec2bin').dec2bin;


describe('Converter', function() {
  describe('dec2bin', function() {
    it('should convert 10 to 1010', function() {
      dec2bin(10).should.equal('1010');
    });
  });
});
