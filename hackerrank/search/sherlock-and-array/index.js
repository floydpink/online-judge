function processData(input) {
  var lines = input.split('\n'), testcases = +lines[0], index = 0;
  console.log(testcases);
  while (testcases-- > 0) {
    var n = lines[++index];
    var array = lines[++index].split(' ').map(function (e) {
      return +e;
    });
    console.log(n, array);

    function reduceToSum(array) {
      return array.length ? array.reduce(function (a, b) {return a + b;}) : 0;
    }

    var sherlockFoundWhatHeIsSearchingFor = false;
    for (var i = 0; i < array.length; i++) {
      var left = array.slice(0, i), right = array.slice(i, array.length - 1);
      // console.log(left, right);
      if (reduceToSum(left) === reduceToSum(right)) {
        console.log('YES');
        sherlockFoundWhatHeIsSearchingFor = true;
        break;
      }
    }
    if (!sherlockFoundWhatHeIsSearchingFor) {
      console.log('NO');
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
