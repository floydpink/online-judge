#!/usr/bin/env node
'use strict';

var fs = require('fs'),
  path = require('path'),
  async = require('async'),
  counter = 0,
  dirCount = 0,
  leetCodeDirPath = './leetcode/',
  urls = [],
  iterator = function (dir, next) {
    var fileName = '/index.js', filePath = leetCodeDirPath + dir + fileName;
    fs.stat(leetCodeDirPath + dir, function (err, stat) {
      if (!err && stat.isDirectory()) {
        fs.stat(filePath, function (err) {
          if (!err) {
            var data = fs.readFileSync(filePath); //read existing contents into data
            var url = '//\n// https://leetcode.com/problems/' + dir + '/\n//';
            if (data.indexOf(url) !== 0) {
              var fd = fs.openSync(filePath, 'w+');
              urls.push(url);
              var buffer = new Buffer(url + '\n\n');
              fs.writeSync(fd, buffer, 0, buffer.length); //write new data
              fs.writeSync(fd, data, 0, data.length); //append old data
              fs.close(fd);
            }
            counter++;
            next();
          } else {
            console.warn('Path does not exist: ', filePath, err);
            next(err);
          }
        });
      } else {
        if (err) {
          next(err);
        } else {
          dirCount--;
          next();
        }
      }
    });
  };

fs.readdir(leetCodeDirPath, function (err, dirs) {
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