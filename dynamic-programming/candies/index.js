function processData(input) {
  var inputLines = input.split('\n'), n = +inputLines[0], children = [];
  for (var i = 0; i < n; i++) {
    children.push(+inputLines[i + 1]);
  }

  var size = children.length;
  if (size <= 1) {
    return size;
  }

  var count = Array.apply(null, Array(size)).map(Number.prototype.valueOf, 1);

  for (i = 1; i < size; i++) {
    if (children[i] > children[i - 1]) {
      count[i] = count[i - 1] + 1;
    }
  }

  for (i = size; i > 0; i--) {
    if (children[i - 1] > children[i]) {
      count[i - 1] = Math.max(count[i] + 1, count[i - 1]);
    }
  }

  console.log(count.reduce(function(a,b){return a + b;}));
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
