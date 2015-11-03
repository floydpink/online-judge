var Node = function (key, value) {
  this.key = key;
  this.value = value;
  this.adjacents = [];
  this.visited = false;
};

var Edge = function (start, end) {
  this.start = start;
  this.end = end;
};

var Tree = function () {
  this.nodes = {};
  this.totalSum = 0;
};

// do something on all the nodes of the tree
Tree.prototype.onAllNodes = function (callback) {
  var keys = Object.keys(this.nodes);
  keys.forEach(function (key) {callback(this.nodes[key]);}, this);
};

Tree.prototype.addNode = function (n) {
  var node = new Node(n.key, n.value);
  if (this.nodes[node.key] === undefined) {
    this.nodes[node.key] = node;
    this.totalSum += node.value;
  } else {
    throw new Error('Cannot add an existing node.');
  }
};

Tree.prototype.addEdge = function (e) {
  var start = this.nodes[e.start], end = this.nodes[e.end];
  start.adjacents.push(end);
  end.adjacents.push(start);
};

Tree.prototype.removeEdge = function (e) {
  var start = this.nodes[e.start], end = this.nodes[e.end];
  start.adjacents.splice(start.adjacents.indexOf(end), 1);
  end.adjacents.splice(end.adjacents.indexOf(start), 1);
};

Tree.prototype.getEdges = function () {
  var edges = [];
  this.onAllNodes(function (node) {
    node.adjacents.forEach(function (a) {
      edges.push(new Edge(node.key, a.key));
    });
  });
  return edges;
};

Tree.prototype.resetVertices = function () {
  this.onAllNodes(function (node) {
    node.visited = false;
  });
};

Tree.prototype.getTreeDiffForEdge = function (edge) {
  // console.log('Tree Sum Diff for Edge %d - %d', edge.start, edge.end);
  // Remove Edge
  this.removeEdge(edge);

  // Calculate TreeDiff using a BFS
  var queue = [], startNode = this.nodes[edge.start], treeSum = 0;
  // set visited to false on all nodes
  this.resetVertices();
  startNode.visited = true;
  queue.push(startNode);
  while (queue.length) {
    // console.log('..>', queue, queue.length);
    var node = queue.shift();
    node.visited = true;
    treeSum += node.value;
    node.adjacents.forEach(function (a) {
      if (!a.visited) queue.push(a);
    });
  }

  //var connectedNodes = [], connectedNodesSum = 0;
  //var disconnectedNodes = [], disconnectedNodesSum = 0;
  //this.onAllNodes(function (node) {
  //  if (!node.visited) {
  //    disconnectedNodes.push(node);
  //    disconnectedNodesSum += node.value;
  //  } else {
  //    connectedNodes.push(node);
  //    connectedNodesSum += node.value;
  //  }
  //});
  //
  //console.log('\nTree Sum:', treeSum);
  //console.log('Connected Nodes:');
  //console.log(connectedNodes.map(function (d) { return d.key + ' : ' + d.value; }).join('\n'));
  //console.log('Disconnected Nodes:');
  //console.log(disconnectedNodes.map(function (d) { return d.key + ' : ' + d.value; }).join('\n'));
  //
  // Add the edge back
  this.addEdge(edge);

  //console.log('Sum:', treeSum, ' Total Sum:', this.totalSum);
  return Math.abs(this.totalSum - treeSum - treeSum);

  //return Math.abs(disconnectedNodesSum - connectedNodesSum);
};

Tree.prototype.printTreeEdges = function () {
  console.log(this.getEdges().map(function (e) {
    return e.start + ' - ' + e.end;
  }).join('\n'));
};

function processData(input) {
  var lines = input.split('\n'), n = +lines[0], index = 2;
  // create a new tree
  var t = new Tree();
  // add the vertices
  lines[1].split(' ').forEach(function (e, i) { t.addNode({key : i + 1, value : +e}); });
  // add the edges
  while (index < n + 1) {
    var edgePair = lines[index].split(' ');
    var edge = new Edge(+edgePair[0], +edgePair[1]);
    t.addEdge(edge);
    index++;
  }

  // console.log(n, t);
  //t.onAllNodes(function (nd) {
  //  console.log(nd.key, nd.value, nd.adjacents.map(function (a) {return a.key}));
  //});

  //t.printTreeEdges();
  //
  //console.log(t.getTreeDiffForEdge(new Edge(2, 5)));
  //
  //t.printTreeEdges();
  //
  var minimumTreeSumDiff = Infinity;
  var edges = t.getEdges().slice();
  // console.log(edges);
  edges.forEach(function (e) {
    var treeSumDiff = t.getTreeDiffForEdge(e);
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
