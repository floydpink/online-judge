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
  for (var e = 1; e < m; e++) {
    for (var f = 0; f < n; f++) {
      if (land[e][f] === '.') {
        up[e][f] = up[e - 1][f] + 1;
      } else {
        up[e][f] = -1;
      }
    }
  }

  var maxPerimeter = -1;
  for (var leftEdge = 0; leftEdge < n; leftEdge++) {
    for (var rightEdge = leftEdge + 1; rightEdge < n; rightEdge++) {
      var vectorArray = [], slidingWidth = rightEdge - leftEdge;
      for (var bottomEdge = 0; bottomEdge < m; bottomEdge++) {
        if (up[bottomEdge][rightEdge] >= slidingWidth) {
          vectorArray.push(bottomEdge);
        }
        var l = 0, r;
        for (r = 0; r < vectorArray.length; r++) {
          var minLeft = vectorArray[r] - Math.min(left[vectorArray[r][leftEdge]], left[vectorArray[r][rightEdge]]);
          while (vectorArray[l] < minLeft) {
            l++;
          }
          if (vectorArray[r] > vectorArray[l]) {
            maxPerimeter = Math.max(maxPerimeter, 2 * slidingWidth + 2 * (vectorArray[r] - vectorArray[l]));
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
