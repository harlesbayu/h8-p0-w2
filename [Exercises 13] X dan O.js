function xo(pola) {
// you can only write your code here!
  var x = 0;
  var o = 0;
  
  for (var i = 0; i < pola.length; i++) {
    if (pola[i] === 'o') {
      o++;
    } 
    else {
      x++;
    }      
  } 

  if (x === o) {
    return true;
  }
  else {
    return false;
  }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true