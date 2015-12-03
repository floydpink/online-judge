'use strict';

var findMaxCoins = function (coins, results, paths, sum, path) {
  if (coins.length === 2) {
    results.push(sum);
    paths.push(path.slice().concat(['|', sum]));
  } else {
    for (var i = 1; i < coins.length - 1; i++) {
      var coinSum = coins[i - 1] * coins[i] * coins[i + 1];
      var newPath = path.slice().concat([coins[i]]);
      var reducedCoins = coins.slice();
      reducedCoins.splice(i, 1);
      findMaxCoins(reducedCoins, results, paths, sum + coinSum, newPath);
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  var coins = [1].concat(nums).concat([1]), results = [], paths = [];
  findMaxCoins(coins, results, paths, 0, []);
  console.log(paths.join('\n'));
  return Math.max.apply(Math, results, paths);
};

console.log(maxCoins([3, 1, 5, 8]));
//console.log(maxCoins([35, 16, 83, 87, 84, 59, 48, 41, 20]));