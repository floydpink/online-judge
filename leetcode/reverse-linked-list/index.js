//
// https://leetcode.com/problems/reverse-linked-list/
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
var reverseList = function (head) {
  if (head === null) return null;
  var reversed = null;
  while (head) {
    var temp = reversed;
    reversed = new ListNode(head.val);
    reversed.next = temp;
    head = head.next;
  }
  return reversed;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function initializeList(array) {
  if (!array.length) return null;
  var head = new ListNode(array.shift());
  var current = head;
  while (array.length) {
    current.next = new ListNode(array.shift());
    current = current.next;
  }
  return head;
}

console.log(reverseList(initializeList([])));
console.log(reverseList(initializeList([1, 2])));