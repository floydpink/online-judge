//
// https://leetcode.com/problems/multiply-strings/
//

// https://leetcode.com/discuss/33951/ac-solution-in-java-with-explanation
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  var n1 = num1.length, n2 = num2.length;
  var products = Array.apply(null, Array(n1 + n2)).map(Number.prototype.valueOf, 0);
  for (var i = n1 - 1; i >= 0; i--) {
    for (var j = n2 - 1; j >= 0; j--) {
      var d1 = num1.charCodeAt(i) - '0'.charCodeAt(0);
      var d2 = num2.charCodeAt(j) - '0'.charCodeAt(0);
      products[i + j + 1] += d1 * d2;
    }
  }
  var carry = 0;
  for (i = products.length - 1; i >= 0; i--) {
    var temp = (products[i] + carry) % 10;
    carry = Math.floor((products[i] + carry) / 10);
    products[i] = temp;
  }
  var result = products.join('');
  while (result.length !== 0 && result.charAt(0) === '0') result = result.substring(1);
  return result.length === 0 ? '0' : result;
};