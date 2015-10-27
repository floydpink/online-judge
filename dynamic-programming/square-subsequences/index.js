var str = '', dp, mod = 1000000007;
function count(a, b, c) {
  if (a < 0 || c <= b) {
    return 0;
  }
  if (dp[a][b][c] !== undefined) {
    return dp[a][b][c];
  }
  var ret = dp[a][b][c] = 0;
  if (str[a] == str[c]) {
    // console.log(' >> str[a] : %s, str[b] : %s (prefix: %d, mid: %d)', str[prefix], str[mid], prefix, mid);
    ret = dp[a][b][c] = (1 + count(a - 1, b, c) + count(a, b, c - 1)) % mod;
  } else {
    ret = dp[a][b][c] = (((count(a - 1, b, c) + count(a, b, c - 1) - count(a - 1, b, c - 1)) % mod) + mod) % mod;
  }
  // console.log(' >> ret : %s', ret);
  return ret;
}

function processData(input) {
  var inputLines = input.split('\n');
  var testcases = +inputLines[0], index = 0;
  while (testcases-- > 0) {
    str = inputLines[++index];
    var n = str.length;
    dp = new Array(n);
    for (var p = 0; p < n; p++) {
      dp[p] = new Array(n);
      for (var q = 0; q < n; q++) {
        dp[p][q] = new Array(n);
        // for (var r = 0; r < 201; r++) {
        //     dp[p][q][r] = -1;
        // }
      }
    }
    var answer = 0;
    for (var i = 0; i <= n - 1; i++) {
      for (var j = i + 1; j <= n - 1; j++) {
        if (str[i] == str[j]) {
          // console.log('>>> str[i] : %s, str[j] : %s (i: %d, j: %d)', str[i], str[j], i, j);
          answer = (answer + count(i - 1, i, j - 1) + 1) % mod;
          // console.log('>>> answer : %s', answer);
        }
      }
    }
    console.log(answer);
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
