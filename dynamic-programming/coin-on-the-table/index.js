function processData(input) {
  var lines = input.split('\n'), metadata = lines[0].split(' '), n = +metadata[0], m = +metadata[1], k = +metadata[2], index = 0;

  var board = [];
  for (var i = 1; i <= n; i++) {
    board[i] = [' '].concat(lines[++index].split(''));
  }

  var graph = new Array(m * n + 1);
  for (var j = 1; j < graph.length; j++) {
    graph[j] = Array.apply(null, Array(m * n + 1)).map(Number.prototype.valueOf, 0);
  }

  var source = {r : 1, c : 1}, destination = {};
  for (var r = 1; r <= n; r++) {
    for (var c = 1; c <= m; c++) {
      switch (board[r][c]) {
        case '*':
          destination = {r : r, c : c};
          break;
        case 'U':
          // add an edge from this cell to the cell above - C(r,c) -> C(r-1,c), if r > 1
          if (r > 1) {
            graph[]
          }
          break;
        case 'L':
          // add an edge from this cell to the cell to the left - C(r,c) -> C(r,c-1), if c > 1
          break;
        case 'D':
          // add an edge from this cell to the cell below - C(r,c) -> C(r+1,c), if r < n
          break;
        case 'R':
          // add an edge from this cell to the cell to the right - C(r,c) -> C(r,c+1), if c < m
          break;
        default:
          break;
      }
    }
  }

  console.log(board);
  console.log(graph);
  console.log(n, m, k);
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
