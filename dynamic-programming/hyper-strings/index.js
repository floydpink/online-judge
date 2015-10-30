function processData(input) {
  var lines = input.split('\n'), metadata = lines[0].split(' ');
  var n = +metadata[0], m = +metadata[1], index = 0, superstrings = [], counter = n;
  while (counter) {
    superstrings.push(lines[++index]);
    counter--;
  }

  console.log(n + ' ' + m);
  console.log(superstrings);

  var MOD = 1000000007;
  var dp = new Array(m + 1);
  var state = new Array(m + 1);

  for (var i = 0; i < m; i++) {
    dp[i] = new Array(1 << 10);
    state[i] = new Array(1 << 10);
  }

  for (i = 0; i < m; i++) {
    for (var j = 0; j < dp[i].length; j++) {
      dp[i][j] = 0;
      state[i][j] = -1;
    }
  }

  dp[0][0] = 1;
  state[0][0] = 1;

  for (i = 0; i < m; i++) {
    for (j = 0; j < dp[i].length; j++) {
      if (state[i][j] >= 0) {
        state[i][j] = 1;
        for (var k = 0; k < superstrings.length; k++) {
          var s = superstrings[k];
          if (i + s.length > m) {
            continue;
          }

          var charCodeForA = 'a'.charCodeAt(0);
          var min = s.charCodeAt(0) - charCodeForA;
          var max = 9;
          for (; max >= 0; max--) {
            if (((1 << max) & j) !== 0) {
              break;
            }
            var newState = 0;
            for (var l = 0; l < s.length; l++) {
              newState += (1 << (s.charCodeAt(l) - charCodeForA))
            }

            var dpSuffix = i + s.length - 1;
            if (min > max) {
              newState += j;
              dp[dpSuffix][newState] = dp[i][j];
              state[dpSuffix][newState] = 1;
            } else {
              if (state[dpSuffix][newState] !== 1) {
                // (i + s.Length) + " " + newState + " " + min + " " + max + " AAA");
                dp[dpSuffix][newState] = (dp[dpSuffix][newState] + dp[i][j]) % MOD;
                state[dpSuffix][newState] = 0;
              }
            }
          }
        }
      }
    }
  }

  var result = 0;
  for (i = 0; i < m; i++) {
    for (j = 0; j < dp[i].length; j++) {
      if (state[i][j] === 1) {
        result = (result + dp[i][j]) % MOD;
      }
    }
    console.log(result);
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
