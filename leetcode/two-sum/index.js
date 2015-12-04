/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var numbers = {};
  for (var i = 0; i < nums.length; i++) {
    numbers[nums[i]] = i;
  }
  // console.log(numbers);
  for (var j = 0; j < nums.length; j++) {
    if (numbers[target - nums[j]] !== undefined && numbers[target - nums[j]] !== j) {
      var results = [];
      results.push(j + 1);
      results.push(numbers[target - nums[j]] + 1);
      return results;
    }
  }
};