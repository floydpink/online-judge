function processData(input) {
  var inputLines = input.split('\n'), metadata = inputLines[0].split(' ');
  var rows = +metadata[0], columns = +metadata[1], rotations = +metadata[2];
  var matrix = [], rotated = new Array(rows);

  for (var row = 0; row < rows; row++) {
    matrix[row] = inputLines[row + 1].split(' ');
    rotated[row] = new Array(columns);
  }

  console.log(rows, columns, rotations);
  console.log(matrix);

  for (var i = 0; i < columns; i++) {
    rotated[i] = new Array(columns);
    for (var j = 0; j < rows; j++) {
      console.log(i, j, columns - i);
      rotated[j][columns - 1 - i] = matrix[i][j];
    }
  }

  console.log(rotated);
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});
inputFd.on('end', function () {
  processData(_input);
});
