'use strict';

var fs = require('fs'),
  request = require('request'),
  cheerio = require('cheerio');

var problemFileContents = '<html>' +
  '<head><title>%TITLE%</title></head>' +
  '<link href="../../viewer/prism.css" rel="stylesheet" /><style>' +
  'body{font-family: sans-serif;margin:10px;}' +
  '.headline{background-color:#777;color:#fff}' +
  '</style><body><h1>%TITLE%</h1>' +
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
    var solution = fs.readFileSync(solutionFilepath, {encoding : 'utf8'});
    request(url, function (error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);
        var questionTitle = $('.question-title > h3').text();
        // remove unwanted text
        $('#tags, #similar, .hidebutton').empty();
        var questionContent = $('.question-content').html();

        var problem = problemFileContents.replace(/%TITLE%/g, questionTitle)
          .replace(/%CONTENT%/g, questionContent).
          replace(/%SOLUTION%/, solution).replace('<p><a href="/subscribe/">Subscribe</a> to see which companies asked this question</p>', '');

        fs.writeFile(problemFilepath, problem, function (err) {
          if (!err) done();
          else {
            console.error('Error when retrieving/saving the contents from %s', url);
            done();
          }
        });
      } else {
        done(error);
      }
    });
  }

};