function processData(input) {
  var sentence = input.split('/n')[0], chars = sentence.split(''), dictionary = {};
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i].toLowerCase();
    if (char !== ' ') {
      if (!dictionary[char]) {
        dictionary[char] = 0;
      }
      dictionary[char] += 1;
    }
    if (Object.keys(dictionary).length === 26) {
      console.log('pangram');
      return;
    }
  }
  console.log('not pangram');
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
