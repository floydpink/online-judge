'use strict';

var findMaxCoinsForRange = function (memo, coins, left, right) {
  if (left + 1 === right) return 0; // we need a range of at least three
  if (memo[left][right] > 0) return memo[left][right];
  var coinSum = 0;
  for (var i = left + 1; i < right; i++)
    coinSum = Math.max(coinSum,
      coins[left] * coins[i] * coins[right] +
      findMaxCoinsForRange(memo, coins, left, i) +
      findMaxCoinsForRange(memo, coins, i, right));
  memo[left][right] = coinSum;
  return coinSum;
};

var maxCoinsMemoized = function (nums) {
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

  var maxCoins = findMaxCoinsForRange(memo, coins, 0, n - 1);
  // console.log(memo.join('\n'));
  return maxCoins;
};

var maxCoinsDp = function (nums) {
  var coins = Array.apply(null, Array(nums.length + 2)).map(Number.prototype.valueOf, 0);
  var n = 1;
  for (var p = 0; p < nums.length; p++) {
    if (nums[p] > 0) {  // zero value balloons doesn't produce any coins
      coins[n++] = nums[p];
    }
  }
  coins[0] = coins[n++] = 1;  // virtual balloons

  var dp = Array.apply(null, Array(n)).map(function () {
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);
  });

  for (var k = 2; k < n; ++k)
    for (var left = 0; left < n - k; ++left) {
      var right = left + k;
      for (var i = left + 1; i < right; ++i)
        dp[left][right] = Math.max(dp[left][right], coins[left] * coins[i] * coins[right] + dp[left][i] + dp[i][right]);
    }

  // console.log(dp.join('\n'));

  return dp[0][n - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // return maxCoinsMemoized(nums);
  return maxCoinsDp(nums);
};

console.log(maxCoins([3, 1, 5, 8]));
console.log(maxCoins([35, 16, 83, 87, 84, 59, 48, 41, 20]));