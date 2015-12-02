function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while ((root.val - p.val) * (root.val - q.val) > 0) {
        root = root.val > p.val ? root.left : root.right;
    }
    return root;
};

console.log(lowestCommonAncestor(sortedArrayToBST([1, 2, 3, 4, 5, null, 6, null]), new TreeNode(1), new TreeNode(2)));