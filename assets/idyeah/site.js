(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = [...document.querySelectorAll('.reveal')];
  const proof = document.querySelector('.proof');
  const voices = proof.querySelector('.voices');
  const figures = [...voices.querySelectorAll('figure')];
  const controls = proof.querySelector('.quote-controls');
  const readAll = proof.querySelector('.read-all');
  const previous = proof.querySelector('.quote-prev');
  const next = proof.querySelector('.quote-next');
  const rotation = proof.querySelector('.quote-rotation');
  const counter = proof.querySelector('.quote-counter');
  const status = proof.querySelector('.quote-status');
  let current = 0, expanded = false, paused = reduced.matches;
  let inView = false, hovered = false, focused = false, explicitPlay = false, timer;

  function schedule() {
    clearTimeout(timer);
    if (!paused && !expanded && inView && (explicitPlay || (!hovered && !focused)) && !document.hidden) {
      timer = setTimeout(() => { current = (current + 1) % figures.length; render(); }, 12000);
    }
  }
  function render(announce = false) {
    voices.classList.toggle('is-expanded', expanded);
    figures.forEach((figure, index) => {
      const visible = expanded || index === current;
      figure.classList.toggle('is-active', index === current);
      figure.inert = !visible;
      if (visible) figure.removeAttribute('aria-hidden');
      else figure.setAttribute('aria-hidden', 'true');
    });
    controls.hidden = expanded;
    readAll.setAttribute('aria-expanded', String(expanded));
    readAll.textContent = expanded ? 'Show one at a time' : 'Read all';
    previous.disabled = next.disabled = rotation.disabled = expanded;
    counter.textContent = String(current + 1).padStart(2, '0') + ' / 04';
    counter.setAttribute('aria-label', 'Testimonial ' + (current + 1) + ' of 4');
    rotation.textContent = paused ? 'Play' : 'Pause';
    rotation.setAttribute('aria-label', paused ? 'Play automatic testimonials' : 'Pause automatic testimonials');
    if (announce) status.textContent = expanded ? 'All four testimonials are displayed.' : 'Testimonial ' + (current + 1) + ' of 4. ' + figures[current].querySelector('blockquote').textContent + ' ' + figures[current].querySelector('figcaption').firstChild.textContent + ', ' + figures[current].querySelector('figcaption span').textContent;
    schedule();
  }

  voices.classList.add('is-carousel');
  controls.hidden = readAll.hidden = false;
  render();
  previous.addEventListener('click', () => { current = (current + figures.length - 1) % figures.length; render(true); });
  next.addEventListener('click', () => { current = (current + 1) % figures.length; render(true); });
  rotation.addEventListener('click', () => { paused = !paused; explicitPlay = !paused; render(); });
  readAll.addEventListener('click', () => { expanded = !expanded; render(true); });
  proof.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; explicitPlay = false; schedule(); } });
  proof.addEventListener('pointerleave', () => { hovered = false; explicitPlay = false; schedule(); });
  proof.addEventListener('focusin', () => { focused = true; explicitPlay = false; schedule(); });
  proof.addEventListener('focusout', event => { if (!proof.contains(event.relatedTarget)) { focused = false; schedule(); } });
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; schedule(); }, {threshold: .25});
    visibility.observe(proof);
  }
  reduced.addEventListener('change', () => { if (reduced.matches) { paused = true; render(); } });

  if (!reduced.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
    }), {threshold: .1});
    reveals.forEach(item => { if (item.getBoundingClientRect().top > innerHeight) item.classList.add('pending'); observer.observe(item); });
    document.documentElement.classList.add('motion');
    reduced.addEventListener('change', () => { if (reduced.matches) { reveals.forEach(item => item.classList.remove('pending')); observer.disconnect(); } });
  }

  // Both theme images are in the DOM. A switch changes styles in place,
  // preserving scroll, testimonial position, focus and pause state.
  const themeButton = document.querySelector('[data-theme-toggle]');
  const themeLabel = document.querySelector('[data-theme-label]');
  function reflectTheme() {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeLabel.textContent = dark ? 'Light' : 'Dark';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    document.querySelector('meta[name="theme-color"]').content = dark ? '#141414' : '#fafafa';
  }
  reflectTheme();
  themeButton.hidden = false;
  let changingTheme = false;
  themeButton.addEventListener('click', async () => {
    if (changingTheme) return;
    changingTheme = true;
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    const nextImage = document.querySelector(nextTheme === 'dark' ? '.hero-dark' : '.hero-light');
    // Retain the current theme until the target image is decoded, avoiding a
    // blank image or matte during the first switch on a slow connection.
    try { if (nextImage.decode) await nextImage.decode(); } catch (_) {}
    document.documentElement.classList.add('theme-changing');
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem('idyeah-theme', nextTheme); } catch (_) {}
    reflectTheme();
    changingTheme = false;
  });
  document.querySelectorAll('.copyright-year').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });
})();
