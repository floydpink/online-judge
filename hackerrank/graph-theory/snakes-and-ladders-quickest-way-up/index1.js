function processData(input) {
  var i, j, lines = input.split('\n'), testcases = +lines[0], index = 0;

  // create a template for the board
  var boardTemplate = new Array(101);
  for (i = 0; i <= 100; i++) {
    boardTemplate[i] = {};
  }

  // add the single move edges for the six values of the die for all squares
  for (i = 1; i <= 100; i++) {
    for (j = 1; j <= 6 && i + j <= 100; j++) {
      boardTemplate[i][i + j] = 1;
    }
  }

  // create a template for the distances
  var distancesTemplate = new Array(101);
  distancesTemplate[1] = 0;
  for (i = 2; i <= 100; i++) {
    distancesTemplate[i] = Infinity;
  }

  while (testcases--) {
    var laddersCount, snakesCount, board = boardTemplate.slice();
    // read all the ladders
    laddersCount = lines[++index];
    for (i = 0; i < laddersCount; i++) {
      var ladderPair = lines[++index].split(' '), ladder = {start : +ladderPair[0], end : +ladderPair[1]};
      // remove all the die-value edges from the square that is the base of a ladder
      // and add only the ladder as a zero distance edge
      board[ladder.start] = {};
      board[ladder.start][ladder.end] = 0;
    }
    // read all the snakes
    snakesCount = lines[++index];
    for (i = 0; i < snakesCount; i++) {
      var snakePair = lines[++index].split(' '), snake = {start : +snakePair[0], end : +snakePair[1]};
      // remove all the die-value edges from the square that is the mouth of a snake
      // and add only the snake as a zero distance edge
      board[snake.start] = {};
      board[snake.start][snake.end] = 0;
    }

    // do BFS to calculate the shortest distance from 1 to 100
    var found = false, queue = [], visited = [], distances = distancesTemplate.slice();
    queue.push(1);
    while (queue.length > 0) {
      var currentSquare = queue.shift();
      var currentDistance = distances[currentSquare];
      var neighbors = Object.keys(board[currentSquare]);
      // check if we have reached the target square
      // console.log('.>', currentSquare);
      if (currentSquare === 100) {
        // console.log('!! FOUND');
        found = true;
        queue = [];
      } else {
        for (i = 0; i < neighbors.length; i++) {
          var neighbor = +neighbors[i];
          var edgeDistance = board[currentSquare][neighbor];
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
          if (distances[neighbor] > currentDistance + edgeDistance) {
            distances[neighbor] = currentDistance + edgeDistance;
          }
        }
      }
    }
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
