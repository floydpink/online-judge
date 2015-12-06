//
// https://leetcode.com/problems/path-sum-ii/
//

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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var dfs = function (tree, sum, path, results, targetSum) {
  if (tree === null) {
    return;
  }
  path.push(tree.val);
  sum += tree.val;
  if (tree.left === null && tree.right === null && sum === targetSum) {
    results.push(path);
    return;
  }
  dfs(tree.left, sum, path.slice(), results, targetSum);
  dfs(tree.right, sum, path.slice(), results, targetSum);
  path.slice(path.length - 1);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  var currentSum = 0, path = [], results = [];
  dfs(root, currentSum, path, results, sum);
  return results;
};

console.log(pathSum(arrayToBinaryTree([]), 1));