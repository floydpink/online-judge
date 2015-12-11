function showSolution(button) {
  button.style.display = 'none';
  document.querySelector('#solution').style.display = 'block';
  event.preventDefault();
}

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('target') === '_blank') {
    if (cordova && cordova.InAppBrowser) {
      cordova.InAppBrowser.open(e.target.getAttribute('href'), '_blank');
      e.preventDefault();
    }
  }
});
