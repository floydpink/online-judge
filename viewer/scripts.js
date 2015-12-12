function showSolution(e) {
  e.target.style.display = 'none';
  document.querySelector('#solution').style.display = 'block';
  event.preventDefault();
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {

  // show solution button
  var showSolutionButton = document.querySelector('#showSolution');
  if (showSolutionButton) showSolutionButton.addEventListener('click', showSolution);

  // open external links in inAppBrowser
  document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('target') === '_blank') {
      if (cordova && cordova.InAppBrowser) {
        cordova.InAppBrowser.open(e.target.getAttribute('href'), '_blank');
        e.preventDefault();
      }
    }
  });

});