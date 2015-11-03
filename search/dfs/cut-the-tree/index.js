var Node = function (key, value) {
  this.key = key;
  this.value = value;
  this.adjacents = [];
};

var Tree = function () {
  this.nodes = {};
};

Tree.prototype.addNode = function (n) {
  var node = new Node(n.key, n.value);
  if (this.nodes[node.key] === undefined) {
    this.nodes[node.key] = node;
  } else {
    throw new Error('Cannot add an existing node.');
  }
};

Tree.prototype.addEdge = function (e) {
  var start = this.nodes[e.start], end = this.nodes[e.end];
  if (start === undefined) {
    throw new Error('Cannot find the start vertex of the edge.');
  } else if (end === undefined) {
    throw new Error('Cannot find the end vertex of the edge.');
  } else {
    start.adjacents.push(end);
  }
};

Tree.prototype.removeEdge = function(e) {
  
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
    t.addEdge({start : +edgePair[0], end : +edgePair[1]});
    index++;
  }

  //console.log(n, t);
  //for (var key in t.nodes) {
  //  var nd = t.nodes[key];
  //  console.log(nd.key, nd.value, nd.adjacents.map(function (a) {return a.key}));
  //}
}

var _input = "";
var inputFd = require('fs').createReadStream(__dirname + '/' + process.argv[2] || 'input0');
inputFd.on('data', function (input) {
  _input += input;
});

inputFd.on('end', function () {
  processData(_input);
});
