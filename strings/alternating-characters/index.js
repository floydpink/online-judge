function processData(input) {
  var lines = input.split('\n'), testcases = +lines[0], index = 0;
  while (testcases--) {
    var str = lines[++index], count = 0;
    if (str.length) {
      var previousChar = str.charAt(0);
      for (var i = 1; i < str.length; i++) {
        var char = str.charAt(i);
        if (char === previousChar) {
          count++;
        }
        previousChar = char;
      }
    }
    console.log(count);
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
