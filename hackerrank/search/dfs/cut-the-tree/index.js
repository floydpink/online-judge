function dfs(graph, start, nodes) {
  var stack = [];
  var visited = [];
  var node;
  var tree1Sum = 0;
  stack.push(start);
  visited[start] = true;
  while (stack.length) {
    node = stack.pop();
    tree1Sum += nodes[node];
    for (var i = 1; i < graph[node].length; i += 1) {
      // console.log('?>', node, i);
      if (graph[node][i] && !visited[i]) {
        stack.push(i);
        visited[i] = true;
      }
    }
  }
  // console.log(visited, nodes, tree1Sum);
  return tree1Sum;
}

function getTreeDiffForEdge(graph, edge, nodes, totalSum) {
  // console.log('\nedge', edge);
  // cut the edge
  graph[edge.start][edge.end] = 0;
  graph[edge.end][edge.start] = 0;

  var tree1Sum = dfs(graph, edge.start, nodes);

  // reinstate the edge
  graph[edge.start][edge.end] = 1;
  graph[edge.end][edge.start] = 1;

  return Math.abs(totalSum - tree1Sum - tree1Sum);
}

function processData(input) {
  var lines = input.split('\n'), n = +lines[0], index = 2;
  // create a new tree
  var tree = [[0]] /*new Array(n)*/, nodes = {}, edges = [], totalSum = 0;
  // add the vertices
  //for (var i = 0; i < tree.length; i++) {
  //  tree[i] = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0);
  //}
  lines[1].split(' ').forEach(function (e, i) {
    nodes[i + 1] = +e;
    totalSum += +e;
    tree[i + 1] = Array.apply(null, Array(n + 1)).map(Number.prototype.valueOf, 0);
  });

  // add the edges
  while (index < n + 1) {
    var edgePair = lines[index].split(' '), start = +edgePair[0], end = +edgePair[1];
    tree[start][end] = 1;
    tree[end][start] = 1;
    edges.push({start : start, end : end});
    index++;
  }

  //console.log(tree);
  //console.log(nodes);
  //console.log(edges);

  var minimumTreeSumDiff = Infinity;

  edges.forEach(function (e) {
    var treeSumDiff = getTreeDiffForEdge(tree, e, nodes, totalSum);
    // console.log('..>', treeSumDiff);
    if (treeSumDiff < minimumTreeSumDiff) {
      minimumTreeSumDiff = treeSumDiff;
    }

  });

  console.log(minimumTreeSumDiff);

}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
