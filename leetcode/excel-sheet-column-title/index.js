/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n <= 0) return null;

  var result = '';
  while (n > 0) {
    n = n - 1;
    result = String.fromCharCode('A'.charCodeAt(0) + n % 26) + result;
    n = Math.floor(n / 26);
  }

  return result;
};

console.log(convertToTitle(1));
console.log(convertToTitle(10));
console.log(convertToTitle(26));
console.log(convertToTitle(27));
console.log(convertToTitle(36));
console.log(convertToTitle(51));
console.log(convertToTitle(52));
console.log(convertToTitle(53));
console.log(convertToTitle(104));
console.log(convertToTitle(26 * 27 + 1));