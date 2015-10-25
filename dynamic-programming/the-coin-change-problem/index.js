function processData(input) {
  var parseInteger = function (num) { return parseInt(num, 10); };

  var inputLines = input.split('\n'), fieldBounds = inputLines[0].split(' ');
  var amount = parseInteger(fieldBounds[0]), coinsCount = parseInteger(fieldBounds[1]);
  var coins = inputLines[1].split(' ').map(parseInteger);

  // Return the count of ways 'coinsCount' distinct coins that are in the 'coins' array
  // can be counted to get the sum of 'amount'
  var count = function (coins, amount, coinsCount) {

    // If 'amount' is zero - there exists one solution: do not include any coins
    if (amount == 0) {
      return 1;
    }

    // If 'amount' is less than zero - no solutions exist
    if (amount < 0) {
      return 0;
    }

    // If there are no coins in the 'coins' array and if 'amount' is greater than zero - no solutions exist
    if (coinsCount <= 0 && amount > 0) {
      return 0;
    }

    // 'count' is the sum of solutions:
    //    1) including C[coinsCount-1] and
    //    2) excluding C[coinsCount-1]
    return count(coins, amount, coinsCount - 1) + count(coins, amount - coins[coinsCount - 1], coinsCount);
  };

  // Another approach - using a table that gets built
  var count2 = function (coins, amount, coinsCount) {

    var i, j, x, y;

    // Table - we would need n+1 rows to include 0 and the n cases
    //**
    // The 2-dimension buffer will contain answers to this question:
    // "how much permutations is there for an amount of `i` cents, and `j`
    // remaining coins?" eg. `buffer[10][2]` will tell us how many permutations
    // there are when giving back 10 cents using only the first two coin types
    // [ 1, 2 ].
    var table = new Array(amount + 1);
    for (i = 0; i <= amount; i++) {
      table[i] = new Array(coinsCount + 1);
    }

    // Fill entries for 0 value (base case)
    //**
    // For all the cases where we need to give back 0 cents, there's exactly
    // 1 permutation: the empty set. Note that buffer[0][0] won't ever be
    // needed.
    for (i = 0; i <= amount; i++) {
      table[0][i] = 1;
    }

    // Fill the rest of the entries in the bottom-up manner
    //**
    // We process each case: 1 cent, 2 cent, etc. up to `n` cents, included.
    for (i = 1; i <= amount; i++) {

      // No more coins? No permutation is possible to attain `i` cents.
      table[i][0] = 0;

      //for (j = 0; j < coinsCount; j++) {
      //
      //  // Count of solutions including C[j]
      //  x = (i - coins[j] >= 0) ? table[i - coins[j]][j] : 0;
      //
      //  // Count of solutions excluding C[j]
      //  y = (j >= 1) ? table[i][j - 1] : 0;
      //
      //  // total count
      //  table[i][j] = x + y;
      //}

      //**
      // Now we consider the cases when we have J coin types available.
      for (j = 1; j <= coinsCount; ++j) {

        // First, we take into account all the known permutations possible
        // _without_ using the J-th coin (actually computed at the previous
        // loop step).
        var value = table[i][j - 1];

        // Then, we add all the permutations possible by consuming the J-th
        // coin itself, if we can.
        if (coins[j - 1] <= i)
          value += table[i - coins[j - 1]][j];

        // We now know the answer for this specific case.
        table[i][j] = value;
      }
    }

    console.log(table);

    //**
    // Return the bottom-right answer, the one we were looking for in the
    // first place.
    return table[amount][coinsCount];
  };

  console.log(amount + ' ' + coinsCount);
  console.log(coins);

  var solutionsCount = count2(coins, amount, coinsCount);

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
