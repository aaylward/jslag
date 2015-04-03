require('should');
var Converter = require('../src/converter');

describe('Converter', function() {
  describe('dec2bin', function() {
    it('should convert 10 to \'1010\'', function() {
      Converter.dec2bin(10).should.equal('1010');
    });
  });

  describe('bin2dec', function() {
    it('should convert \'1010\' to 10', function() {
      Converter.bin2dec('1010').should.equal(10);
    });
  });
});
