'use strict';

var fs = require('fs'),
  request = require('request'),
  cheerio = require('cheerio');

var problemFileContents = '<html>' +
  '<head><title>%TITLE%</title>' +
  '\n<!-- BEGIN COPY/PASTE FROM CORDOVA  -->\n' +
  '<meta http-equiv="Content-Security-Policy" content="default-src \'self\' data: gap: https://ssl.gstatic.com \'unsafe-eval\'; style-src \'self\' \'unsafe-inline\'; media-src *">' +
  '<meta name="format-detection" content="telephone=no">' +
  '<meta name="msapplication-tap-highlight" content="no">' +
  '<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">' +
  '\n<!-- END COPY/PASTE FROM CORDOVA  -->\n' +
  '</head><link href="../../viewer/prism.css" rel="stylesheet" /><link href="../../viewer/styles.css" rel="stylesheet" />' +
  '<body><h2><a href="%URL%" target="_blank">%TITLE%</a></h2>' +
  '<div class="back-button"><a href="../index.html">Back...</a></div><div>&#160;</div>' +
  '<div class="headline">Problem:</div>' +
  '<div>%CONTENT%</div><div class="headline">Solution:</div>' +
  '<div><a id="showSolution" href="#">Show...</a></div>' +
  '<div id="solution"><pre><code class="language-javascript">%SOLUTION%</code></pre></div>' +
  '<footer><span style="float: right;"><a href="https://github.com/floydpink" target="_blank">&copy; Floyd Pink</a></span></footer>' +
  '<script type="text/javascript" src="../../cordova.js"></script>' +
  '<script src="../../viewer/prism.js"></script>' +
  '<script src="../../viewer/scripts.js"></script>' +
  '</body></html>';

module.exports = {

  scrape : function (url, problemFilepath, solutionFilepath, done) {
    // console.log('scrape: %s, %s', url, problemFilepath);
    var solution = fs.readFileSync(solutionFilepath, {encoding : 'utf8'}),
      saveProblemFile = function (question) {
        var title = question.id + ': ' + question.title + ' (' + question.type + ')';
        var problem = problemFileContents.replace(/%TITLE%/g, title)
          .replace(/%CONTENT%/g, question.content)
          .replace(/%SOLUTION%/g, solution)
          .replace(/%URL%/g, url)
          .replace('<p><a href="/subscribe/">Subscribe</a> to see which companies asked this question</p>', '');

        fs.writeFile(problemFilepath, problem, function (err) {
          if (!err) done(null, question);
          else {
            console.error('Error when retrieving/saving the contents from %s', url);
            done(null, question);
          }
        });
      };
    var questionDataFilepath = solutionFilepath.substring(0, solutionFilepath.lastIndexOf('/')) + '/problem.json';
    // console.log(questionDataFilepath);
    fs.stat(questionDataFilepath, function (err) {
      if (!err) {
        // console.log('question metadata exists: %s', questionDataFilepath);
        var problem = require(__dirname + questionDataFilepath.replace('./leetcode', ''));
        saveProblemFile(problem);
      } else {
        console.log('Fetching the problem metadata for url: %s', url);
        request(url, function (error, response, html) {
          if (!error) {
            var $ = cheerio.load(html);
            var questionTitle = $('.question-title > h3').text();
            var questionId = $('#ajaxform').find('input[name="question_id"]').val();
            var questionType = $('.total-ac').next().next().find('strong').text();
            // remove unwanted text
            $('#tags, #similar, .hidebutton').empty();
            var questionContent = $('.question-content').html();
            var question = {
              id      : questionId,
              type    : questionType,
              title   : questionTitle,
              content : questionContent
            };
            fs.writeFileSync(questionDataFilepath, JSON.stringify(question), {encoding : 'utf8'});
            saveProblemFile(question);
          } else {
            done(error);
          }
        });
      }
    });

  }

};