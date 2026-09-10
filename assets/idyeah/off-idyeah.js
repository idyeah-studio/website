(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  function reflectTheme() {
    const dark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.querySelector('[data-theme-label]').textContent = dark ? 'Light' : 'Dark';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#141414' : '#fafafa';
  }
  reflectTheme();
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('idyeah-theme', root.dataset.theme); } catch (_) {}
    reflectTheme();
  });
  document.querySelectorAll('.copyright-year').forEach(el => { el.textContent = String(new Date().getFullYear()); });
  const share = document.querySelector('.off-share');
  if (!share) return;
  const permalink = share.dataset.permalink;
  const credit = 'off idyeah. Concept by idyeah · Made with GPT-6. Original: ' + permalink;
  const status = share.querySelector('[role=status]');
  const fallback = share.querySelector('.off-credit-manual');
  share.querySelectorAll('[data-copy]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const value = button.dataset.copy === 'credit' ? credit : permalink;
      try {
        await navigator.clipboard.writeText(value);
        fallback.hidden = true;
        status.textContent = button.dataset.copy === 'credit' ? 'Credit and original link copied.' : 'Link copied.';
      } catch (_) {
        fallback.hidden = false;
        fallback.value = value;
        fallback.focus();
        fallback.select();
        status.textContent = 'Select and copy the text below.';
      }
    });
  });
})();
