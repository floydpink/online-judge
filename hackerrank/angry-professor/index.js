function processData(input) {
  var inputLines = input.split('\n'), testcases = +inputLines[0], index = 1;

  while (testcases--) {
    var metadata = inputLines[index].split(' ');
    var totalStudentsCount = +metadata[0], minimumStudentsCount = +metadata[1];

    index++;

    var entryTimes = inputLines[index].split(' ').map(function (e) {return +e;});
    var lateStudents = entryTimes.map(function (e) {
      return e > 0 ? 1 : 0;
    });
    var lateStudentsCount = lateStudents.reduce(function (prev, curr) {
      return prev + curr;
    });

    var classIsCanceled = lateStudentsCount > (totalStudentsCount - minimumStudentsCount) ? 'YES' : 'NO';

    console.log(classIsCanceled);

    index++;
  }
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.setEncoding("ascii");
inputFd.on("data", function (input) {
  _input += input;
});

inputFd.on("end", function () {
  processData(_input);
});
