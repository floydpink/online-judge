// I couldn't solve this - but thanks to the editorial, I could understand the problem and solution now

var answer = 0, visited = [];

function dfs(graph, origin) {
  // console.log('.>', origin);
  visited[origin] = true;

  var numberOfVertices = 0;

  // loop through all the neighbors - but exhaust each before moving onto next
  for (var i = 0; i < graph[origin].length; i++) {

    var neighbor = graph[origin][i];

    if (!visited[neighbor]) { // if this node hasn't been visited before

      var numberOfNodes = dfs(graph, neighbor); // recursively find its children

      if (numberOfNodes % 2 === 0) {  // if this neighbor's children's count is even, add 1 to 'cut-able' edges
        // console.log('!! An edge (%s - %s) that can be cut (%s nodes in sub-tree)', origin, neighbor, numberOfNodes);
        answer++;
      } else {  // otherwise add this neighbor's children's count to the vertices count for origin
        // console.log('An edge (%s - %s) that cannot be cut (%s nodes in sub-tree)', origin, neighbor, numberOfNodes);
        numberOfVertices += numberOfNodes;
      }

      // console.log('<<', answer);
    }
  }

  return numberOfVertices + 1;
}

function addEdge(graph, vertex, edge) {
  if (graph[vertex] === undefined) {
    graph[vertex] = [];
  }
  graph[vertex].push(edge);
  return graph;
}

function processData(input) {
  var lines = input.split('\n');
  var metadata = lines[0].split(' '), v = +metadata[0], e = +metadata[1], i;
  var tree = {}, edges = [];
  for (i = 0; i < e; i++) {
    var edgeParts = lines[i + 1].split(' '), start = +edgeParts[0], end = +edgeParts[1];
    tree = addEdge(tree, start, end);
    tree = addEdge(tree, end, start);
    edges.push({s : start, e : end});
  }
  // console.log(tree);
  dfs(tree, edges[0].s);
  //console.log(visited);
  console.log(answer);
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
