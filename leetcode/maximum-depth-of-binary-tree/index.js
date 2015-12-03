var maximumDepth = function (root, maximum) {
  if (root === null) return maximum;
  var max = maximum + 1;
  return Math.max(maximumDepth(root.left, max), maximumDepth(root.right, max));
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return maximumDepth(root, 0);
};