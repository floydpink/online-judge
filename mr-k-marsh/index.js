function processData(input) {
  var parseInteger = function (num) { return parseInt(num, 10); };

  var inputLines = input.split('\n'), fieldBounds = inputLines[0].split(' ');
  var m = parseInteger(fieldBounds[0]), n = parseInteger(fieldBounds[1]), land = [], left = [], up = [];

  // read the land into our array and initialize the sub-arrays for left and up
  for (var row = 0; row < m; row++) {
    land[row] = inputLines[row + 1].split('');
    left[row] = new Array(n);
    up[row] = new Array(n);
  }

  // set the first row and first column
  for (var i = 0; i < m; i++) {
    left[i][0] = land[i][0] == '.' ? 0 : -1;
  }
  for (var j = 0; j < n; j++) {
    up[0][j] = land[0][j] == '.' ? 0 : -1;
  }

  // set up the remaining rows and columns on left array relative to the top-left corner
  for (var p = 0; p < m; p++) {
    for (var q = 1; q < n; q++) {
      if (land[p][q] === '.') {
        left[p][q] = left[p][q - 1] + 1;
      } else {
        left[p][q] = -1;
      }
    }
  }

  // set up the remaining rows and columns on up array relative to the top-left corner
  for (var r = 1; r < m; r++) {
    for (var s = 0; s < n; s++) {
      if (land[r][s] === '.') {
        up[r][s] = up[r - 1][s] + 1;
      } else {
        up[r][s] = -1;
      }
    }
  }

  var maxPerimeter = -1;
  for (var r1 = 0; r1 < n; r1++) {
    for (var r2 = r1 + 1; r2 < n; r2++) {
      var vectorArray = [], rDiff = r2 - r1;
      for (var z = 0; z < m; z++) {
        if (up[r2][z] >= rDiff) {
          vectorArray.push(z);
        }
        var l = 0, r;
        for (r = 0; r < vectorArray.length; r++) {
          var minLeft = vectorArray[r] - Math.min(left[r1][vectorArray[r]], left[r2][vectorArray[r]]);
          while (vectorArray[l] < minLeft) {
            l++;
          }
          if (vectorArray[r] > vectorArray[l]) {
            maxPerimeter = Math.max(maxPerimeter, 2 * rDiff + 2 * (vectorArray[r] - vectorArray[l]));
          }
        }
      }
    }
  }

  console.log(m + ' ' + n);
  console.log(land);
  console.log(left);
  console.log(up);
  console.log(maxPerimeter);

  console.log(maxPerimeter === -1 ? 'impossible' : maxPerimeter);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
