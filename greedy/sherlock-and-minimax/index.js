function processData(input) {

  var lines = input.split('\n'), n = +lines[0], limits = lines[2].split(' '),
    array = lines[1].split(' ').map(function (a) { return +a;}).sort(function (a, b) { return a > b; }),
    p = +limits[0], q = +limits[1], minimax = -1, minimaxKey = -1;

  console.log(n, array, p, q);

  for (var i = p; i <= q; i++) {
    var minimumDiff = array[0] - i;
    if (minimumDiff > minimax) {
      minimax = minimumDiff;
      minimaxKey = i;
    }
    console.log('..>', i, minimumDiff, minimax, minimaxKey);
  }

  console.log(minimaxKey);
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
