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

var findParents = function (rootNode, node) {
  if (rootNode === null) {
    return [];
  }
  var parents = [];
  parents.push(rootNode);
  if (rootNode.val === node.val) {
    return parents;
  }
  if (node.val <= rootNode.val) {
    return parents.concat(findParents(rootNode.left, node));
  } else {
    return parents.concat(findParents(rootNode.right, node));
  }
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
var lowestCommonAncestor = function (root, p, q) {
  var parentsP = findParents(root, p);
  var parentsQ = findParents(root, q);
  var shorterParentsPathLength = parentsP.length > parentsQ.length ? parentsQ.length : parentsP.length;
  for (var i = 0; i < shorterParentsPathLength; i++) {
    if (parentsP[i] !== parentsQ[i]) {
      break;
    }
  }
  return parentsP[i - 1];
};

console.log(lowestCommonAncestor(sortedArrayToBST([1, 2, 3, 4, 5, null, 6, null]), new TreeNode(1), new TreeNode(4)));