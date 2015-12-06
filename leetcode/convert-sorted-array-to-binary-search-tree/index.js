//
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  var rootIndex = Math.floor(nums.length / 2);
  var tree = new TreeNode(nums[rootIndex]);
  tree.left = sortedArrayToBST(nums.slice(0, rootIndex));
  tree.right = sortedArrayToBST(nums.slice(rootIndex + 1));
  return tree;
};