function processData(input) {
  var inputLines = input.split('\n'), metadata = inputLines[0].split(' ');
  var superStringsCount = +metadata[0], maxHyperStringLength = +metadata[1], index = 0, superStrings = [], counter = superStringsCount;
  while (counter) {
    superStrings.push(inputLines[++index]);
    counter--;
  }

  // Another approach - using a table that gets built
  var count = function (superStrings, hyperStringLength, superStringIndex) {

    var i, j, x, y;

    // Table - we would need n+1 rows to include 0 and the n cases
    //**
    // The 2-dimension buffer will contain answers to this question:
    // "how much permutations are there for hyperString of length of `i` characters with the `j`th
    // superString?" eg. `table[10][2]` will tell us how many permutations
    // there are when giving back 10 characters using only the first 2 super strings
    // [ 1, 2 ].
    var table = new Array(hyperStringLength + 1);
    for (i = 0; i <= hyperStringLength; i++) {
      table[i] = new Array(superStrings.length);
    }

    // Fill entries for 0 value (base case)
    //**
    // For all the cases where we need to give back a 0 char string (empty string), there's exactly
    // 1 permutation: the empty set. Note that buffer[0][0] won't ever be
    // needed.
    for (i = 0; i <= hyperStringLength; i++) {
      table[0][i] = 1;
    }

    // Fill the rest of the entries in the bottom-up manner
    //**
    // We process each case: 1 cent, 2 cent, etc. up to `n` cents, included.
    for (i = 1; i <= hyperStringLength; i++) {

      // No more superStrings? No permutation is possible to attain `i` characters.
      table[i][0] = 0;

      //**
      // Now we consider the cases when we have J super strings available.
      for (j = 1; j <= superStrings.length; ++j) {

        // First, we take into account all the known permutations possible
        // _without_ using the J-th super-string (actually computed at the previous
        // loop step).
        var value = table[i][j - 1];

        // Then, we add all the permutations possible by consuming the J-th
        // super-string itself, if we can.
        if (superStrings[j - 1].length <= i)
          value += table[i - superStrings[j - 1].length][j];

        // We now know the answer for this specific case.
        table[i][j] = value;
      }
    }

    console.log(table);

    //**
    // Return the bottom-right answer, the one we were looking for in the
    // first place.
    return table[hyperStringLength][superStringsCount];
  };

  console.log(superStringsCount + ' ' + maxHyperStringLength);
  console.log(superStrings);

  var solutionsCount = count(superStrings, maxHyperStringLength);

  console.log(solutionsCount);
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
