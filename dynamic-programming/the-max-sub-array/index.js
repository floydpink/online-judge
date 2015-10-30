function countSums(array) {
  var maxContiguousSum = -Infinity, contiguousSum = 0, nonContiguousSum = 0;

  for (var i = 0; i < array.length; i++) {
    var number = array[i];

    // Contiguous
    if (number > 0) {
      contiguousSum += number;
    } else {
      contiguousSum = 0;
    }

    // Non-Contiguous
    if (number > 0) {
      nonContiguousSum += number;
    }

    if (contiguousSum > maxContiguousSum) {
      maxContiguousSum = contiguousSum;
    }
  }

  return {contiguous : maxContiguousSum, nonContiguous : nonContiguousSum};
}

function processData(input) {
  var inputLines = input.split('\n'), testcases = +inputLines[0];
  var index = 1;
  // console.log(testcases);
  while (testcases > 0) {
    // Get the number of items in the array
    var n = +(inputLines[index]);
    // Get the array
    index++;
    var array = inputLines[index].split(' ').map(function (a) { return +a; });
    // console.log(n);
    // console.log(array);

    var sums = countSums(array);

    console.log(sums.contiguous + ' ' + sums.nonContiguous);

    // Go to next test case
    testcases--;
    index++;
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
