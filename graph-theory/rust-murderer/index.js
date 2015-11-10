function trackConnectedCities(city, connectedCities, wellConnectedCities) {
  // console.log('.>', city);
  if (connectedCities[city] !== undefined) {
    wellConnectedCities[city] = true;
    delete connectedCities[city];
  } else {
    connectedCities[city] = true;
  }
}

function addEdge(graph, node, adjacent) {
  if (graph[node] === undefined) {
    graph[node] = [];
  }
  graph[node].push(adjacent);
}

function processData(input) {
  var i, lines = input.split('\n'), testCases = +lines[0], index = 0, partiallyConnectedCitiesDictionary = {}, wellConnectedCitiesDictionary = {};

  while (testCases--) {
    // read the metadata - N (nodesCount) and M (roadsCount)
    var metadata = lines[++index].split(' '), nodesCount = +metadata[0], roadsCount = +metadata[1], cityRoadGraph = {}, villageRoadGraph = {}, origin;

    // read the M city roads
    for (i = 0; i < roadsCount; i++) {
      var roadEndPoints = lines[++index].split(' '), start = +roadEndPoints[0], end = +roadEndPoints[1];
      // track cities that are already connected by city roads
      trackConnectedCities(start, partiallyConnectedCitiesDictionary, wellConnectedCitiesDictionary);
      trackConnectedCities(end, partiallyConnectedCitiesDictionary, wellConnectedCitiesDictionary);
    }

    // read the origin S
    origin = +lines[++index];

    // find the disconnected cities and connect them using 'village roads'
    for (i = 1; i <= nodesCount; i++) {
      if (wellConnectedCitiesDictionary[i] === undefined && partiallyConnectedCitiesDictionary[i] === undefined) {
        // we have a disconnected city - connect it to two partially connected cities (cities of degree 1)
        for (var j = 1; j <= nodesCount; j++) {
          if (j !== i) {
            addEdge(villageRoadGraph, j, i);
            addEdge(villageRoadGraph, i, j);
          }
        }
      }

    }

    console.log(nodesCount, roadsCount, cityRoadGraph, villageRoadGraph, partiallyConnectedCitiesDictionary, wellConnectedCitiesDictionary, origin);

    // BFS to calculate shortest path to all cities using the village roads graph - and track parent
    var visited = {}, parents = {}, distances = {}, queue = [];
    queue.push(origin);
    distances[origin] = 0;
    parents[origin] = null;
    while (queue.length > 0) {
      var current = queue.shift();
      var currentDistance = distances[current];
      for (j = 0; j < villageRoadGraph[current].length; j++) {
        var neighbor = villageRoadGraph[current][j];
        if (distances[neighbor] === undefined || distances[neighbor] > currentDistance + 1) {
          distances[neighbor] = currentDistance + 1;
          parents[neighbor] = current;
        }
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    console.log(distances);
    console.log(parents);
    var distancesOutput = [];
    Object.keys(distances).forEach(function (n) {
      if (+n !== origin) {
        distancesOutput.push(distances[n]);
      }
    });
    console.log(distancesOutput.join(' '));
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
