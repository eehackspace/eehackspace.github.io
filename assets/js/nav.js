// Mobile navigation toggle. The site works fully without this file:
// with JavaScript off, the nav simply stays expanded.
(function () {
  document.documentElement.classList.add('js');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
