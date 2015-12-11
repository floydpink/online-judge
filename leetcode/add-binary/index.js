//
// https://leetcode.com/problems/add-binary/
//

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var i = a.length, j = b.length, res = '', carry = 0;
  while (i > 0 || j > 0 || carry) {
    var sum = carry;
    if (i > 0) sum += parseInt(a.charAt(--i), 10);
    if (j > 0) sum += parseInt(b.charAt(--j), 10);
    res = (sum % 2 === 0 ? '0' : '1') + res;
    carry = sum > 1 ? 1 : 0;
  }
  return res;
};