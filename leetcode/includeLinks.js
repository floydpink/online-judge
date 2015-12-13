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
            scraper.scrape(problemUrl, problemFilePath, solutionFilePath, function (err, question) {
              if (err) console.error(err);
              else {
                next();
                // save the problem into an array for generating the toc
                files.push({question : question, path : problemName, complexity : question.type === 'Easy' ? 0 : question.type === 'Medium' ? 1 : 2});
              }
            });

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

        var tableOfContents = '<html><head>' +
          '\n<!-- BEGIN COPY/PASTE FROM CORDOVA  -->\n' +
          '<meta http-equiv="Content-Security-Policy" content="default-src \'self\' data: gap: https://ssl.gstatic.com \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; media-src *">' +
          '<meta name="format-detection" content="telephone=no">' +
          '<meta name="msapplication-tap-highlight" content="no">' +
          '<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">' +
          '\n<!-- END COPY/PASTE FROM CORDOVA  -->\n' +
          '<title>Leet Code Solutions</title>' +
          '<link href="../viewer/styles.css" rel="stylesheet" />' +
          '</head><body><h1>Problems</h1><ol class="problems">';
        tableOfContents += files.sort(function (a, b) {
          return a.complexity - b.complexity;
        }).map(function (file) {
          return '<li><a href="./' + file.path + '/index.html">' +
            file.question.title + ' (' + file.question.type.substring(0, 1) + ')' +
            '</a></li>';
        }).join('\n');
        tableOfContents += '</ol>' +
          '<footer><small>Last generated on: ' + new Date().toISOString() + '</small>' +
          '<span style="float: right;"><a href="https://github.com/floydpink" target="_blank">&copy; Floyd Pink</a></span></footer>' +
          '<script type="text/javascript" src="../cordova.js"></script>' +
          '<script src="../viewer/scripts.js"></script>' +
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