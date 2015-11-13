function processData(input) {
  var parseInteger = function (num) { return parseInt(num, 10); };

  var inputLines = input.split('\n'), fieldBounds = inputLines[0].split(' ');
  var amount = parseInteger(fieldBounds[0]), coinsCount = parseInteger(fieldBounds[1]);
  var coins = inputLines[1].split(' ').map(parseInteger);

  console.log(amount + ' ' + coinsCount);
  console.log(coins);

  var count = function (amount, coins, index, memo) {
    if (memo[amount][index] > 0) return memo[amount][index];

    if (index <= 0) {
      console.log('xx', amount, index, coins[index]);
      return 1;
    }

    var ways = 0, coin = coins[index];
    for (var i = 0; i * coin < amount; i++) {
      var amountRemaining = amount - i * coin;
      //console.log('.>>', index, coin, i, amount, amountRemaining, ways);
      ways += count(amountRemaining, coins, index - 1, memo);
      //console.log('  >', index, coin, i, amount, amountRemaining, ways);
    }
    memo[amount][index] = ways;
    return ways;
  };

  // Initialize memo
  var memo = new Array(amount + 1);
  for (var j = 0; j <= amount; j++) {
    memo[j] = Array.apply(null, Array(coinsCount)).map(Number.prototype.valueOf, j === 0 ? 1 : -1);
  }

  console.log(memo);

  var solutionsCount = count(amount, coins, coinsCount - 1, memo);

  console.log(memo);

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
