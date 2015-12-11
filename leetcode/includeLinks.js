#!/usr/bin/env node
'use strict';

var fs = require('fs'),
  path = require('path'),
  util = require('util'),
  async = require('async'),
  scraper = require('./scraper'),
  counter = 0,
  dirCount = 0,
  dirPath = './leetcode/',
  problemFileName = '/index.html',
  solutionFileName = '/index.js',
  urls = [],
  files = [],
  addUrlHeader = function (solutionFile, problemUrl) {
    // console.log('addUrlHeader: %s', problemUrl);
    var data = fs.readFileSync(solutionFile); //read existing contents into data
    var urlHead = '//\n// ' + problemUrl + '\n//';
    if (data.indexOf(urlHead) !== 0) {
      var fd = fs.openSync(solutionFile, 'w+');
      urls.push(problemUrl);
      var buffer = new Buffer(urlHead + '\n\n');
      fs.writeSync(fd, buffer, 0, buffer.length); //write new data
      fs.writeSync(fd, data, 0, data.length); //append old data
      fs.close(fd);
    }
  },
  iterator = function (problemName, next) {
    var solutionFilePath = dirPath + problemName + solutionFileName;
    fs.stat(dirPath + problemName, function (err, stat) {
      if (!err && stat.isDirectory()) {
        fs.stat(solutionFilePath, function (err) {
          if (!err) {
            // add the URL header into the solution file
            var problemUrl = 'https://leetcode.com/problems/' + problemName + '/';
            addUrlHeader(solutionFilePath, problemUrl);
            counter++;

            // Scrape the problem from leetcode.com and cache it into a JSON file
            var problemFilePath = dirPath + problemName + problemFileName;
            scraper.scrape(problemUrl, problemFilePath, solutionFilePath, function () {
              next();
            });

            // save the problem into an array for generating the toc
            files.push({name : problemName, path : problemName});
          } else next(util.format('Path does not exist: %s\n%s', solutionFilePath, err));
        });
      } else {
        if (err) next(err);
        else {
          dirCount--;
          next();
        }
      }
    });
  };

fs.readdir(dirPath, function (err, dirs) {
  if (!err) {
    dirCount = dirs.length;
    async.each(dirs, iterator, function (err) {
      if (!err) {

        var tableOfContents = '<html><head><title>Leet Code Solutions</title></head><body><h1>Problems</h1><ol>';
        tableOfContents += files.map(function (file) {
          return '<li><a href="./' + file.path + '/index.html">' + file.name + '</a></li>';
        }).join('\n');
        tableOfContents += '</ol>' +
          '<footer><span>Last generated on: ' + new Date().toISOString() + '</span>' +
          '<span style="float: right;"><a href="https://github.com/floydpink">&copy; Floyd Pink</a></span></footer>' +
          '</body></html>';

        // Write the index.html for leetCode dir
        fs.writeFile(dirPath + problemFileName.substr(1), tableOfContents, function (err) {
          if (!err) {
            console.log(urls.join('\n'));
            console.log('Processed %d files, which is %s all of %d dirs',
              counter, dirCount === counter ? '' : ' NOT ', dirCount);
            console.log();
          } else {
            console.error('Error writing the table of contents file...');
          }
        });

      } else {
        console.log('Some error', err);
      }
    });
  }
});