//
// https://leetcode.com/problems/remove-linked-list-elements/
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var result = new ListNode(0);
  result.next = head;
  var current = result.next, previous = result;
  while (current !== null) {
    if (current.val === val) {
      if (current.next !== null) {
        current.val = current.next.val;
        current.next = current.next.next;
      } else {
        current = previous.next = null;
      }
    } else {
      previous = current;
      current = current.next;
    }
  }
  return result.next;
};

//public ListNode removeElements(ListNode head, int val) {
//        if (head == null) return null;
//        head.next = removeElements(head.next, val);
//        return head.val == val ? head.next : head;
//}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function initializeList(array) {
  var head = new ListNode(array.shift());
  var current = head;
  while (array.length) {
    current.next = new ListNode(array.shift());
    current = current.next;
  }
  return head;
}

console.log(JSON.stringify(removeElements(initializeList([1, 2, 1]), 1)));
console.log(JSON.stringify(removeElements(initializeList([1]), 1)));
