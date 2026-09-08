// Apply a previously chosen theme before the stylesheet and first paint.
// New visitors see the approved light version; no-JS visitors do too.
try {
  const theme = localStorage.getItem('idyeah-theme');
  if (theme === 'light' || theme === 'dark') {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#141414' : '#fafafa';
  }
} catch (_) { /* Storage can be unavailable in private or restricted contexts. */ }
