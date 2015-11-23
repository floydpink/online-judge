/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null) return true;
  var fast = head, slow = head, rev = null;
  while (fast && fast.next !== null) {
    fast = fast.next.next;
    var temp = rev;
    rev = slow;
    rev.next = temp;
    slow = slow.next;
  }
  if (fast) {
    slow = slow.next;
  }

  while (rev && rev.val === slow.val) {
    slow = slow.next;
    rev = rev.next;
  }

  return rev === null;
};

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

console.log(isPalindrome(initializeList([])));
console.log(isPalindrome(initializeList([1,2,1,1,2,1])));