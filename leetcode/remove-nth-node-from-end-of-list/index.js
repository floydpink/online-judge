//
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null || n === 0) return head;
  var i = 0, prev = null, slow = head, fast = head;
  while (fast !== null) {
    fast = fast.next;
    i++;
    if (i > n) {
      prev = slow;
      slow = slow.next;
    }
  }
  if (prev) {
    prev.next = (slow.next !== null) ? slow.next : null;
    return head;
  } else {
    return slow.next ? slow.next : null;
  }
};