function ReversibleString(boringString) {
  var value,
      reversedString,
      reversedAlready;

  if (typeof boringString !== 'string') {
    throw new Error('You must pass a string to ReversibleString constructor.');
  }
  
  value = boringString;
  reversedAlready = false;

  this.get = function() {
    return value;
  };

  this.reversed = function() {
    if (!reversedAlready) {
      reverse();
      reversedAlready = true;
    }
    return reversedString;
  };

  function reverse() {
    var chars, length, temp, i;
    
    chars = value.split('');
    length = chars.length;

    for (i=0; i<length/2; i++) {
      temp = chars[length - 1 - i];
      chars[length - 1 - i] = chars[i];
      chars[i] = temp;
    }

    reversedString = chars.join('');
  }
}

module.exports = {
  ReversibleString: ReversibleString
};
