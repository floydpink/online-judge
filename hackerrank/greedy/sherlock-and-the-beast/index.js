function processData(input) {
  var lines = input.split('\n'), testCases = +lines[0], index = 0;

  while (testCases--) {
    var numberOfDigits = lines[++index], maximumDecentNumber = -1;
    // console.log(numberOfDigits);
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
