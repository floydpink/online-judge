function processData(input) {
  var lines = input.split('\n'), testcases = +lines[0], index = 0;
  while (testcases--) {
    var twoStrings = lines[++index], replaceCount = -1;
    if (twoStrings.length % 2 === 0) {
      replaceCount = 0;
      var len = twoStrings.length, half = len / 2;
      var left = twoStrings.substring(0, half), right = twoStrings.substring(half), leftDic = {};
      for (var i = 0; i < left.length; i++) {
        var char = left.charAt(i);
        if (leftDic[char] === undefined) {
          leftDic[char] = 0;
        }
        leftDic[char] += 1;
      }
      for (var j = 0; j < right.length; j++) {
        char = right.charAt(j);
        if (leftDic[char] === undefined) {
          replaceCount++;
        } else {
          leftDic[char] -= 1;
          if (leftDic[char] === 0) {
            delete leftDic[char];
          }
        }
      }
    }
    console.log(replaceCount);
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
