// Thanks to http://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/

var findMinBinarySearch = function (arr, low, high) {
  if (high < low) {
    return arr[0];
  }

  if (low === high) {
    return arr[low];
  }

  var mid = Math.floor((low + high) / 2);

  if (mid < high && arr[mid] > arr[mid + 1]) {
    return arr[mid + 1];
  }

  if (arr[low] === arr[mid] && arr[high] && arr[mid]) {
    return Math.min(findMinBinarySearch(arr, low, mid - 1), findMinBinarySearch(arr, mid + 1, high))
  }

  if (mid > low && arr[mid - 1] > arr[mid]) {
    return arr[mid];
  }

  if (arr[high] < arr[mid]) {
    return findMinBinarySearch(arr, mid + 1, high);
  } else {
    return findMinBinarySearch(arr, low, mid - 1);
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  return findMinBinarySearch(nums, 0, nums.length - 1);
};

console.log(findMin([]));
console.log(findMin([1, 2]));
console.log(findMin([2, 1]));
console.log(findMin([2, 2, 2, 2, 2, 2, 0, 1, 1, 2]));
console.log(findMin([4, 5, 6, 7, 8, 9, 1, 2, 3]));
