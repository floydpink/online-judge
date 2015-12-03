'use strict';

var findMaxCoins = function (memo, coins, left, right) {
  if (left + 1 === right) return 0; // we need a range of at least three
  if (memo[left][right] > 0) {
    return memo[left][right];
  }
  var coinSum = 0;
  for (var i = left + 1; i < right; i++) {
    coinSum = Math.max(coinSum,
      coins[left] * coins[i] * coins[right] +
      findMaxCoins(memo, coins, left, i) +
      findMaxCoins(memo, coins, i, right));
  }
  memo[left][right] = coinSum;
  return coinSum;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  var coins = Array.apply(null, Array(nums.length + 2)).map(Number.prototype.valueOf, 0);
  var n = 1;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {  // zero value balloons doesn't produce any coins
      coins[n++] = nums[i];
    }
  }
  coins[0] = coins[n++] = 1;  // virtual balloons

  var memo = Array.apply(null, Array(n)).map(function () {
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);
  });

  var maxCoins = findMaxCoins(memo, coins, 0, n - 1);
  // console.log(memo.join('\n'));
  return maxCoins;
};

// console.log(maxCoins([3, 1, 5, 8]));
console.log(maxCoins([35, 16, 83, 87, 84, 59, 48, 41, 20]));