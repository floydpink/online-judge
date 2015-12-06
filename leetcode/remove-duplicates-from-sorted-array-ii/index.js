//
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var firstIndex = 0, result = [];
  nums.forEach(function (curr, index, arr) {
    if (arr[index] === arr[index - 1]) {
      if (index === firstIndex + 1) {
        result.push(curr);
      }
    } else {
      firstIndex = index;
      result.push(curr);
    }
  });
  return result;
};

console.log(removeDuplicates([1, 1]));

//console.log(removeDuplicates([]));
//console.log(removeDuplicates([1]));
//console.log(removeDuplicates([1, 1]));
//console.log(removeDuplicates([1, 2, 3]));
//console.log(removeDuplicates([1, 1, 2, 2, 3, 5]));
//console.log(removeDuplicates([1, 1, 1, 2, 2, 2, 3, 5, 5]));