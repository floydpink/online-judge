/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  if (s.length <= 1) return s;

  var start = 0, maxLength = 0, low, high;

  for (var i = 1; i < s.length; i++) {
    low = i - 1;
    high = i;
    while (low >= 0 && high < s.length && s.charAt(low) === s.charAt(high)) {
      if (high - low + 1 > maxLength) {
        maxLength = high - low + 1;
        start = low;
      }
      low--;
      high++;
    }

    low = i - 1;
    high = i + 1;
    while (low >= 0 && high < s.length && s.charAt(low) === s.charAt(high)) {
      if (high - low + 1 > maxLength) {
        maxLength = high - low + 1;
        start = low;
      }
      low--;
      high++;
    }
  }
  return s.substring(start, start + maxLength);
};