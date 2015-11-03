// Queue implementation
function Queue() {
  this.items = [];
}
Queue.prototype.enqueue = function (item) {
  this.items.push(item);
};
Queue.prototype.size = function () {
  return this.items.length;
};
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
};
Queue.prototype.dequeue = function () {
  return this.items.shift();
};

// Node implementation
function Node(key) {
  this.key = key;
  this.distance = -1;
  this.parent = null;
  this.adjacentList = {};
}
Node.prototype.addAdjacent = function (adj) {
  if (!this.adjacentList[adj.key]) {
    this.adjacentList[adj.key] = adj;
  }
};
Node.prototype.adjacents = function () {
  var adjacentList = this.adjacentList;
  return Object.keys(adjacentList).map(function (a) {return adjacentList[a]; });
};

// Graph implementation
function Graph() {
  this.nodes = {};
}
Graph.prototype.getNode = function (key) {
  var node = this.nodes[key];
  if (!node) {
    node = new Node(key);
    this.nodes[key] = node;
  }
  return node;
};
Graph.prototype.addEdge = function (start, end) {
  var startNode = this.getNode(start);
  var endNode = this.getNode(end);
  startNode.addAdjacent(endNode);
  endNode.addAdjacent(startNode);
};
Graph.prototype.breadthFirstSearch = function (origin) {

  origin = this.getNode(origin);

  var searchQ = new Queue();

  origin.distance = 0;
  searchQ.enqueue(origin);

  while (!searchQ.isEmpty()) {

    var current = searchQ.dequeue();

    var adjacents = current.adjacents();
    for (var i = 0; i < adjacents.length; i++) {
      var adj = adjacents[i];
      if (adj.distance == -1) {
        adj.distance = current.distance + 6;
        adj.parent = current;
        searchQ.enqueue(adj);
      }
    }

  }

  var nodes = this.nodes;
  var distances = Object.keys(nodes).filter(function (node) {
    return +node !== origin.key;
  }).map(function (node) {
    return nodes[node].distance;
  });
  console.log(distances.join(' '));
};

function processData(input) {
  var inputLines = input.split('\n'), testcases = +inputLines[0];
  var index = 1;
  while (testcases > 0) {
    var metadata = inputLines[index].split(' '), nodeCount = +metadata[0], edgeCount = +metadata[1];

    // initialize a graph with 'nodeCount' number of nodes
    var graph = new Graph();
    for (var i = 0; i < nodeCount; i++) {
      graph.getNode(i + 1); // 'getNode' implicitly adds the node as well (BAD!!)
    }

    // process edge lines
    for (var j = 0; j < edgeCount; j++) {
      index++;
      var edges = inputLines[index].split(' '), start = +edges[0], end = +edges[1];
      graph.addEdge(start, end);
    }

    // get the origin node
    index++;
    var origin = +inputLines[index];
    graph.breadthFirstSearch(origin);
    testcases--;

    index++;
  }
}

var _input = "";
var inputFd = require('fs').createReadStream('bfs/input1');
inputFd.setEncoding("ascii");
inputFd.on("data", function (input) {
  _input += input;
});

inputFd.on("end", function () {
  processData(_input);
});
