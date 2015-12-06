//
// https://leetcode.com/problems/ugly-number-ii/
//

// Thanks to https://leetcode.com/discuss/52905/my-16ms-c-dp-solution-with-short-explanation !
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n <= 0) return -1;  // Corner Case
  if (n === 1) return 1;  // Base Case
  var p2 = 0, p3 = 0, p5 = 0; // Pointers to next multipliers for 2,3 and 5 respectively
  var uglyNumbers = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0); // Initialize the table
  uglyNumbers[0] = 1; // Set the base case
  for (var i = 1; i < n; i++) {
    uglyNumbers[i] = Math.min(uglyNumbers[p2] * 2, uglyNumbers[p3] * 3, uglyNumbers[p5] * 5);
    if (uglyNumbers[i] == uglyNumbers[p2] * 2) p2++;
    if (uglyNumbers[i] == uglyNumbers[p3] * 3) p3++;
    if (uglyNumbers[i] == uglyNumbers[p5] * 5) p5++;
  }
  return uglyNumbers[n - 1];
};

console.log(nthUglyNumber(25));