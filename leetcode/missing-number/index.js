///**
// * @param {number[]} nums
// * @return {number}
// */
//var missingNumber = function (nums) {
//  var result = 0;
//  nums.forEach(function (e, i, a) {
//    result = result + i - e;
//  });
//  return result + nums.length;
//};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums = nums.sort(function (a, b) {return a - b;});
  var last;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
    last = nums[i];
  }
  return last + 1;
};