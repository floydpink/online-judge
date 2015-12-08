#!/usr/bin/env node
'use strict';

var fs = require('fs'),
  path = require('path'),
  util = require('util'),
  async = require('async'),
  counter = 0,
  dirCount = 0,
  dirPath = './leetcode/',
  solutionFileName = '/index.js',
  urls = [],
  addUrlHeader = function (solutionFile, problemName) {
    var data = fs.readFileSync(solutionFile); //read existing contents into data
    var problemUrl = 'https://leetcode.com/problems/' + problemName + '/';
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
  iterator = function (dir, next) {
    var solutionFilePath = dirPath + dir + solutionFileName;
    fs.stat(dirPath + dir, function (err, stat) {
      if (!err && stat.isDirectory()) {
        fs.stat(solutionFilePath, function (err) {
          if (!err) {
            addUrlHeader(solutionFilePath, dir);
            counter++;
            next();
          } else  next(util.format('Path does not exist: %s\n%s', solutionFilePath, err));
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
        console.log(urls.join('\n'));
        console.log('Processed %d files, which is %s all of %d dirs',
          counter, dirCount === counter ? '' : ' NOT ', dirCount);
        console.log();
      } else {
        console.log('Some error', err);
      }
    });
  }
});