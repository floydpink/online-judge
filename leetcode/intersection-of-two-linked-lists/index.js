//
// https://leetcode.com/problems/intersection-of-two-linked-lists/
//

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  var current = headA, lenA = 0, lenB = 0;
  while (current !== null) {
    current = current.next;
    lenA++;
  }
  current = headB;
  while (current !== null) {
    current = current.next;
    lenB++;
  }
  var short = Math.min(lenA, lenB), extra = 0;
  if (lenA > short) {
    extra = lenA - short;
    while (extra > 0) {
      headA = headA.next;
      extra--;
    }
  }
  if (lenB > short) {
    extra = lenB - short;
    while (extra > 0) {
      headB = headB.next;
      extra--;
    }
  }
  while (headA !== null) {
    if (headA === headB) {
      return headA;
    } else {
      headA = headA.next;
      headB = headB.next;
    }
  }
  return null;
};