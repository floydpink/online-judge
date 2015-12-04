/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  if (nums.length === 0) return [];

  // Bayer-Moore Majority algorithm
  var candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0, i = 0;

  for (i = 0; i < nums.length; i++) {
    if (count1 === 0 || candidate1 === nums[i]) {
      count1++;
      candidate1 = nums[i];
    } else if (count2 === 0 || candidate2 === nums[i]) {
      count2++;
      candidate2 = nums[i];
    } else {
      if (count1 !== 0) count1--;
      if (count2 !== 0) count2--;
    }
  }

  count1 = count2 = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === candidate1) count1++;
    else if (nums[i] === candidate2) count2++;
  }

  var results = [];
  if (count1 > Math.floor(nums.length / 3)) results.push(candidate1);
  if (count2 > Math.floor(nums.length / 3)) results.push(candidate2);

  return results;
};