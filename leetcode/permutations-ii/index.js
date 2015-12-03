function getCharacterCountMap(nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var char = nums[i];
    if (!map[char]) {
      map[char] = 0;
    }
    map[char] = map[char] + 1;
  }
  return map;
}

function getPermutationsRecursive(map, prefix, remaining, result) {
  // Base Case - permutations has been completed
  if (remaining === 0) {
    result.push(prefix);
  }

  // Try remaining letters for next char, and generate remaining permutations
  var keys = Object.keys(map);
  for (var i = 0, len = keys.length; i < len; i++) {
    var char = keys[i],
      count = map[char];
    if (count > 0) {
      map[char] = count - 1;
      var newPrefix = prefix.slice();
      newPrefix.push(+char);
      getPermutationsRecursive(map, newPrefix, remaining - 1, result);
      map[char] = count;
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var result = [];
  var map = getCharacterCountMap(nums);
  getPermutationsRecursive(map, [], nums.length, result);
  return result;
};