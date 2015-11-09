function processData(input) {
  var lines = input.split('\n'), testcases = +lines[0], index = 0;
  while (testcases--) {
    var firstString = lines[++index], secondString = lines[++index], hasSubstring = 'NO', dict = {};
    for (var i = 0; i < firstString.length; i++) {
      var char = firstString.charAt(i);
      if (dict[char] === undefined) {
        dict[char] = true;
      }
    }
    for (var j = 0; j < secondString.length; j++) {
      char = secondString.charAt(j);
      if (dict[char]) {
        hasSubstring = 'YES';
        break;
      }
    }
    console.log(hasSubstring);
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
