//
// https://leetcode.com/problems/fraction-to-recurring-decimal/
//

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return '0';
  var result = '';
  result += (numerator > 0) ^ (denominator > 0) ? '-' : '';
  var num = Math.abs(numerator), den = Math.abs(denominator);

  result += Math.floor(num / den);

  num %= den;
  if (num === 0) {
    return result;
  }

  result += '.';
  var map = {};
  while (num !== 0) {
    map[num] = result.length;

    num *= 10;
    result += Math.floor(num / den);
    num %= den;

    var repeatingFractionStart = map[num];
    if (repeatingFractionStart !== undefined) {
      result = result.substring(0, repeatingFractionStart) + '(' + result.substring(repeatingFractionStart) + ')';
      break;
    }
  }
  return result;
};