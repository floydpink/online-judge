//
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return null;
  var current = head;
  while (current !== null) {
    while (current.next !== null && current.val === current.next.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
};