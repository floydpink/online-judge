//
// https://leetcode.com/problems/path-sum/
//

//
// https://leetcode.com/problems/path-sum/
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false;

  var dfs = function (node, sum, path) {
    if (node) {
      var temp = path + node.val;
      if (!node.left && !node.right) {
        if (sum === temp) return true;
      }
      if (dfs(node.left, sum, temp)) return true;
      return dfs(node.right, sum, temp);
    }
    return false;
  };

  return dfs(root, sum, 0);
};

/*
 //  Iterative DFS
 var hasPathSum = function (root, sum) {
 var stack = [], pre = null, cur = root;
 var pathsum = 0;
 while (cur || stack.length) {
 while (cur) {
 stack.push(cur);
 pathsum += cur.val;
 cur = cur.left;
 }
 cur = stack[stack.length - 1];

 if (!cur.left && !cur.right && pathsum === sum) return true;

 if (cur.right && pre !== cur.right) {
 cur = cur.right;
 } else {
 pre = cur;
 stack.pop();
 pathsum -= cur.val;
 cur = null;
 }
 }
 return false;
 };
 */


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var arrayToBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  var rootIndex = Math.floor(nums.length / 2);
  var tree = new TreeNode(nums[rootIndex]);
  tree.left = arrayToBinaryTree(nums.slice(0, rootIndex));
  tree.right = arrayToBinaryTree(nums.slice(rootIndex + 1));
  return tree;
};

console.log(hasPathSum(arrayToBinaryTree([1]), 1));
console.log(hasPathSum(arrayToBinaryTree([2, 1]), 1));