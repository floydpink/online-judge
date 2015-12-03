var internalStack;

/**
 * @constructor
 */
var Queue = function () {
  internalStack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function (x) {
  internalStack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function () {
  return internalStack.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function () {
  return internalStack.length ? internalStack[0] : null;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function () {
  return internalStack.length === 0;
};