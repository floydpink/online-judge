/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var length = nums.length, index = 0;
  while (index < length) {
    if (nums[index] === val) {
      var temp = nums[length - 1];
      nums[length - 1] = nums[index];
      nums[index] = temp;
      length--;
    } else {
      index++;
    }
  }
  return length;
};

var array = [3, 3, 5, 6, 7, 3, 4, 3];
console.log(removeElement(array, 3));
console.log(array);