function processData(input) {
  var i, j, lines = input.split('\n'), testcases = +lines[0], index = 0;

  // init board graph
  var boardTemplate = new Array(101);
  for (i = 1; i <= 100; i++) {
    boardTemplate[i] = new Array(101);
  }

  // init edges for squares
  for (i = 1; i <= 100; i++) {
    for (j = 1; j <= 6 && i + j <= 100; j++) {
      boardTemplate[i][i + j] = 1;
    }
  }

  // init distances template
  var distanceTemplate = new Array(101);
  distanceTemplate[1] = 0;
  for (i = 2; i <= 100; i++) {
    distanceTemplate[i] = Infinity;
  }

  while (testcases--) {
    var board = boardTemplate.slice(), ladderCount, snakeCount;

    // Add the ladder edges
    ladderCount = +lines[++index];
    for (i = 0; i < ladderCount; i++) {
      var ladderPair = lines[++index].split(' '), ladder = {s : +ladderPair[0], e : +ladderPair[1]};
      board[ladder.s] = new Array(101);
      board[ladder.s][ladder.e] = 0;
    }

    // Add the snake edges
    snakeCount = +lines[++index];
    for (i = 0; i < snakeCount; i++) {
      var snakePair = lines[++index].split(' '), snake = {s : +snakePair[0], e : +snakePair[1]};
      board[snake.s] = new Array(101);
      board[snake.s][snake.e] = 0;
    }

    // start the BFS on the squares of the board to find the shortest path from 1 to 100
    var distances = distanceTemplate.slice();
    var visited = new Array(101), queue = [], found = false;
    queue[0] = 1;
    while (queue.length > 0) {
      var currentSquare = queue.shift();
      var currentDistance = distances[currentSquare];
      if (currentSquare === 100) {
        found = true;
        queue = [];
      }
      for (var neighbor = 1; neighbor <= 100; neighbor++) {
        var edgeDistance = board[currentSquare][neighbor];

        // if there is a connection to this neighbor
        if (edgeDistance !== undefined) {
          // compare and update the shortest distance to the neighbor
          if (distances[neighbor] > currentDistance + edgeDistance) {
            distances[neighbor] = currentDistance + edgeDistance;
          }
          // add the neighbor into the queue if it hasn't been visited and mark it as visited
          if (!visited[neighbor]) {
            queue.push(neighbor);
            visited[neighbor] = true;
          }

        }

      } // end checking all neighbors
    } // end processing all squares in the BFS queue

    if (found) {
      console.log(distances[100]);
    } else {
      console.log(-1);
    }

  }
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
