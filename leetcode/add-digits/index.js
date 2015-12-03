/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  var length = num.toString().length, result = 0;
  while (length > 1) {
    var factor = Math.pow(10, length - 1);
    result += Math.floor(num / factor);
    num = num % factor;
    length--;
  }
  result += num;
  if (result > 9) {
    result = addDigits(result);
  }
  return result;
};

///**
// * @param {number} num
// * @return {number}
// */
//var addDigits = function (num) {
//    return 1 + (num - 1) % 9;
//};

console.log(addDigits(100));