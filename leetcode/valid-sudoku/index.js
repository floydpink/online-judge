//
// https://leetcode.com/problems/valid-sudoku/
//

'use strict';

var isValid = function (board, x1, x2, y1, y2) {
  var map = {};
  for (var x = x1; x <= x2; x++)
    for (var y = y1; y <= y2; y++) {
      var cell = board[x][y];
      if (cell !== '.') {
        if (map[cell] !== undefined) return false;
        else map[cell] = true;
      }
    }
  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (var i = 0; i < 9; i++) {
    //  columns                        rows                           squares
    if (!isValid(board, i, i, 0, 8) || !isValid(board, 0, 8, i, i) || !isValid(board, Math.floor(i / 3) * 3, Math.floor(i / 3) * 3 + 2, (i % 3) * 3, (i % 3) * 3 + 2)) {
      return false;
    }
  }
  return true;
};