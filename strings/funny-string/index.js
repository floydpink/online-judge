function processData(input) {
  var lines = input.split('\n');
  var t = +lines[0], index = 0;
  while (t-- > 0) {
    var str = lines[++index], rev = str.split('').reverse().join(''), isFunny = true;
    // console.log(str);
    for (var i = 1; i < str.length; i++) {
      if (Math.abs(str.charCodeAt(i) - str.charCodeAt(i - 1)) !== Math.abs(rev.charCodeAt(i) - rev.charCodeAt(i - 1))) {
        console.log('Not Funny');
        isFunny = false;
        break;
      }
    }
    if (isFunny) console.log('Funny');
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
