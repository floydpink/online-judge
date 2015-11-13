function processData(input) {
  var lines = input.split('\n'), rocks = +lines[0], index = 0, gemElements;
  while (rocks--) {
    var rock = lines[++index], composition = {};
    for (var i = 0; i < rock.length; i++) {
      var elem = rock[i];
      if (!composition[elem]) {
        composition[elem] = true;
      }
    }
    // Process against the previous set of "potential" gem elements (find an intersect)
    if (gemElements === undefined) {
      gemElements = composition;
    } else {
      var temp = gemElements;
      gemElements = {};
      var existingElements = Object.keys(temp);
      for (var j = 0; j < existingElements.length; j++) {
        var existingElement = existingElements[j];
        if (composition[existingElement]) {
          gemElements[existingElement] = true;
          delete composition[existingElement];
        }
      }
      var newElements = Object.keys(composition);
      for (var k = 0; k < newElements.length; k++) {
        var newElement = newElements[k];
        if (temp[newElement]) {
          gemElements[newElement] = true;
        }
      }
    }
  }
  console.log(Object.keys(gemElements).length);
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
