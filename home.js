(() => {
  const button = document.querySelector('.motion-toggle');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  function sync() {
    document.documentElement.classList.toggle('motion-paused', paused || preference.matches);
    button.hidden = preference.matches;
    button.textContent = paused ? 'Play motion' : 'Pause motion';
  }
  button.addEventListener('click', () => { paused = !paused; sync(); });
  preference.addEventListener('change', sync);
  sync();
})();
