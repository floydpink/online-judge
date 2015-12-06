//
// https://leetcode.com/problems/implement-stack-using-queues/
//

var internalQueue;
/**
 * @constructor
 */
var Stack = function () {
  internalQueue = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function (x) {
  internalQueue.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function () {
  internalQueue.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function () {
  return internalQueue[internalQueue.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function () {
  return internalQueue.length === 0;
};