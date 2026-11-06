function copyBlock(btn) {
  var clone = btn.parentElement.cloneNode(true);
  var strip = clone.querySelectorAll('.label, .copy-btn');
  for (var i = 0; i < strip.length; i++) strip[i].remove();
  navigator.clipboard.writeText(clone.textContent.trim()).then(function () {
    btn.textContent = 'Copied ✓';
    setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
  });
}
