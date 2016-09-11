function fibBinet(n) {
  var 
   BinePlus = (1 + Math.sqrt(5)) / 2);
   BineMinus = (1 - Math.sqrt(5)) / 2);
   a = Math.pow(BinePlus, n);
   b = Math.pow(BineMinus, n);
   sum = 0;

  return sum = (a - b) / Math.sqrt(5);
}

alert( fibBinet(77) );
// (Math.pow( ((1 + Math.sqrt(5))/2), n) - Math.pow( ((1 - Math.sqrt(5))/2), n))/Math.sqrt(5)