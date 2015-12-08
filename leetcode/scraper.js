'use strict';

var fs = require('fs'),
  request = require('request'),
  cheerio = require('cheerio');

var problemFileContents = '<html>' +
  '<head><title>%TITLE%</title></head>' +
  '<link href="../../viewer/prism.css" rel="stylesheet" /><style>' +
  'body{font-family: sans-serif;margin:25px;}' +
  '.headline{background-color:#777;color:#fff}' +
  '</style><body><h2><a href="%URL%">%TITLE%</a></h2>' +
  '<div><a href="javascript:history.back()">Back...</a></div><div>&#160;</div>' +
  '<div class="headline">Problem:</div>' +
  '<div>%CONTENT%</div><div class="headline">Solution:</div>' +
  '<div><pre><code class="language-javascript">%SOLUTION%</code></pre></div>' +
  '<footer><span>Last generated on: ' + new Date().toISOString() + '</span>' +
  '<span style="float: right;"><a href="https://github.com/floydpink">&copy; Floyd Pink</a></span></footer>' +
  '<script src="../../viewer/prism.js"></script>' +
  '</body></html>';

module.exports = {

  scrape : function (url, problemFilepath, solutionFilepath, done) {
    // console.log('scrape: %s, %s', url, problemFilepath);
    var solution = fs.readFileSync(solutionFilepath, {encoding : 'utf8'}),
      saveProblemFile = function (questionTitle, questionContent) {
        var problem = problemFileContents.replace(/%TITLE%/g, questionTitle)
          .replace(/%CONTENT%/g, questionContent)
          .replace(/%SOLUTION%/g, solution)
          .replace(/%URL%/g, url)
          .replace('<p><a href="/subscribe/">Subscribe</a> to see which companies asked this question</p>', '');

        fs.writeFile(problemFilepath, problem, function (err) {
          if (!err) done();
          else {
            console.error('Error when retrieving/saving the contents from %s', url);
            done();
          }
        });
      };
    var questionDataFilepath = solutionFilepath.substring(0, solutionFilepath.lastIndexOf('/')) + '/problem.json';
    // console.log(questionDataFilepath);
    fs.stat(questionDataFilepath, function (err) {
      if (!err) {
        // console.log('question metadata exists: %s', questionDataFilepath);
        var problem = require(__dirname + questionDataFilepath.replace('./leetcode', ''));
        saveProblemFile(problem.title, problem.content);
      } else {
        console.log('Fetching the problem metadata for url: %s', url);
        request(url, function (error, response, html) {
          if (!error) {
            var $ = cheerio.load(html);
            var questionTitle = $('.question-title > h3').text();
            // remove unwanted text
            $('#tags, #similar, .hidebutton').empty();
            var questionContent = $('.question-content').html();
            fs.writeFileSync(questionDataFilepath, JSON.stringify({ title: questionTitle, content: questionContent }), { encoding: 'utf8'});
            saveProblemFile(questionTitle, questionContent);
          } else {
            done(error);
          }
        });
      }
    });

  }

};