function showSolution(button) {
  button.style.display = 'none';
  document.querySelector('#solution').style.display = 'block';
  event.preventDefault();
}

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('target') === '_blank') {
    console.log('Here..');
  }
});
