const dialog = document.querySelector('#off-dialog');
const content = dialog.querySelector('.dialog-content');
let opener;
function openFrom(button, mode, label) { opener = button; dialog.dataset.mode = mode; dialog.setAttribute("aria-label", label); dialog.showModal(); }
document.querySelector('[data-enlarge]')?.addEventListener('click', function () {
  content.className = 'dialog-content';
  content.replaceChildren(this.querySelector('img').cloneNode(true));
  openFrom(this, "image", "Enlarged strip");
});
document.querySelector('[data-transcript]')?.addEventListener('click', function () {
  content.className = 'dialog-content transcript';
  content.replaceChildren(document.querySelector('#transcript').content.cloneNode(true));
  openFrom(this, "transcript", "Strip transcript");
});
document.querySelector('[data-share]')?.addEventListener('click', function () {
  content.className = 'dialog-content share-content';
  const issue = location.pathname.match(/off-(\d+)/)[1];
  const url = `https://www.idyeah.studio/off-idyeah/${issue}`;
  content.innerHTML = '<h2>Share this strip</h2><nav class="share-options" aria-label="Share options"></nav><p role="status"></p>';
  const nav = content.querySelector('nav');
  for (const [label, href] of [['LinkedIn',`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],['X',`https://x.com/intent/tweet?url=${encodeURIComponent(url)}`]]) {
    const a = document.createElement('a'); a.textContent = label; a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer'; nav.append(a);
  }
  const copy = document.createElement('button'); copy.textContent = 'Copy link';
  copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(url); content.querySelector('[role=status]').textContent = 'Link copied.'; } catch { content.querySelector('[role=status]').textContent = url; } }); nav.append(copy);
  openFrom(this, "share", "Share this strip");
});
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog && (e.clientX < dialog.getBoundingClientRect().left || e.clientX > dialog.getBoundingClientRect().right || e.clientY < dialog.getBoundingClientRect().top || e.clientY > dialog.getBoundingClientRect().bottom)) dialog.close(); });
dialog.addEventListener('close', () => opener?.focus());
