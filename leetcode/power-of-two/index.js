/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 2) return true;
  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(10));
console.log(isPowerOfTwo(34));
console.log(isPowerOfTwo(32));