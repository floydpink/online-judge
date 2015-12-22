//
// https://leetcode.com/problems/bulb-switcher/
//

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  var array = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 1);
  for (var i = 2; i <= n; i++) {
    var togglePosition = i - 1;
    while (togglePosition < n) {
      array[togglePosition] = array[togglePosition] === 1 ? 0 : 1;
      togglePosition += i;
    }
  }
  return array.reduce(function (prev, curr) {
    return prev + curr;
  }, 0);
};

for (var i = 1; i <= 101; i++) {
  console.log(i, ' -> ', bulbSwitch(i));
}

// ACCEPTED SOLUTION
///**
// * @param {number} n
// * @return {number}
// */
//var bulbSwitch = function(n) {
//  return Math.floor(Math.sqrt(n));
//};