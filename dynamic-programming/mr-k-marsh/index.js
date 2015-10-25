function processData(input) {
  var parseInteger = function (num) { return parseInt(num, 10); };

  var inputLines = input.split('\n'), fieldBounds = inputLines[0].split(' ');
  var rows = parseInteger(fieldBounds[0]), columns = parseInteger(fieldBounds[1]);
  var land = [], range = [];

  for (var row = 0; row < rows; row++) {
    land[row] = inputLines[row + 1].split('');
    range[row] = [];
  }

  // range contains the smallest row index (i, j) can reach down to
  for (row = 0; row < columns; row++) {
    range[0][row] = land[0][row] === '.' ? 0 : 5000;
  }

  for (row = 1; row < rows; row++) {
    for (var column = 0; column < columns; column++) {
      range[row][column] = (land[row][column] === '.') ? Math.min(range[row - 1][column], row) : 5000;
    }
  }

  var maxPerimeter = -1;

  for (var baseRow = 0; baseRow < rows; baseRow++) {
    for (var highRow = baseRow + 1; highRow < rows; highRow++) {
      // Scanning all possible upper and lower border
      var lastColumn = -1, perimeter = 0;
      for (column = 0; column < columns; column++) {
        // Check column (i, j)
        if (land[highRow][column] === '.' && land[baseRow][column] === '.') { //Two corners are '.'
          if (range[highRow][column] <= baseRow) { // Column is all '.'
            if (lastColumn !== -1) {
              perimeter = 2 * (highRow - baseRow - 1) + 2 * (column - lastColumn + 1);
              maxPerimeter = Math.max(maxPerimeter, perimeter);
            } else {
              lastColumn = column;
            }
          }
        } else {
          lastColumn = -1;
          break;
        }
        //console.log('baseRow: %d, highRow: %d, lastColumn: %d, column: %d, perimeter: %d, maxP: %d',
        //  baseRow, highRow, lastColumn, column, perimeter, maxPerimeter);
      }
    }

  }

  //console.log(rows + ' ' + columns);
  //console.log('... land');
  //console.log(land);
  //console.log('... range');
  //console.log(range);
  //console.log('...');

  console.log(maxPerimeter === -1 ? 'impossible' : maxPerimeter);
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});

//process.stdin.resume();
//process.stdin.setEncoding("ascii");
//process.stdin.on("data", function (input) {
//  _input += input;
//});
//
//process.stdin.on("end", function () {
//  processData(_input);
//});
