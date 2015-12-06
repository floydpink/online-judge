//
// https://leetcode.com/problems/3sum-closest/
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort(function (a, b) {return a - b;});
  var answer = nums[0] + nums[1] + nums[2];
  for (var i = 0; i < nums.length - 2; i++) {
    var low = i + 1, high = nums.length - 1;
    while (low < high) {
      var sum = nums[i] + nums[low] + nums[high];
      if (Math.abs(target - sum) < Math.abs(target - answer)) {
        answer = sum;
        if (answer === target) return answer;
      }
      if (sum > target) {
        high--;
      } else {
        low++;
      }
    }
  }
  return answer;
};

console.log(threeSumClosest([0, 2, 1, -3], 1));
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));