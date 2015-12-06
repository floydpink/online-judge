//
// https://leetcode.com/problems/candy/
//

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  var children = ratings;


  var size = children.length;
  if (size <= 1) {
    return size;
  }

  var count = Array.apply(null, Array(size)).map(Number.prototype.valueOf, 1);

  for (i = 1; i < size; i++) {
    if (children[i] > children[i - 1]) {
      count[i] = count[i - 1] + 1;
    }
  }

  for (i = size; i > 0; i--) {
    if (children[i - 1] > children[i]) {
      count[i - 1] = Math.max(count[i] + 1, count[i - 1]);
    }
  }

  return count.reduce(function (a, b) {return a + b;});
};