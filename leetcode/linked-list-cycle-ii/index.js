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
var detectCycle = function (head) {
  if (head === null || head.next === null) return null;

  var slow = head, fast = head, entry = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow != entry) {
        slow = slow.next;
        entry = entry.next;
      }
      return entry;
    }
  }
  return null;
};