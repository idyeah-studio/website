(() => {
  'use strict';
  const config = document.querySelector('script[data-idyeah-analytics]');
  const websiteId = config?.dataset.websiteId;
  const hosts = ['idyeah.studio', 'www.idyeah.studio'];
  // Keep local previews, other hosted projects, and opted-out visits out of reports.
  if (!hosts.includes(location.hostname) || !/^[\da-f]{8}-(?:[\da-f]{4}-){3}[\da-f]{12}$/i.test(websiteId || '') ||
      navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;
  try { if (localStorage.getItem('umami.disabled') === '1') return; } catch (_) {}

  const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  const cleanUrl = (value, campaigns = false) => {
    try {
      const url = new URL(value, location.origin);
      const query = new URLSearchParams();
      if (campaigns) campaignKeys.forEach(key => {
        const value = url.searchParams.get(key);
        if (value) query.set(key, value.slice(0, 100));
      });
      return url.pathname + (query.size ? '?' + query.toString() : '');
    } catch (_) { return '/'; }
  };
  window.idyeahAnalyticsBeforeSend = (type, payload) => {
    // No form contents, email addresses, arbitrary queries, or advertising click IDs.
    if (payload.url) payload.url = cleanUrl(payload.url, true);
    if (payload.referrer) {
      try {
        const referrer = new URL(payload.referrer, location.origin);
        payload.referrer = hosts.includes(referrer.hostname) ? referrer.origin + referrer.pathname : referrer.origin;
      } catch (_) { payload.referrer = ''; }
    }
    return payload;
  };

  let ready = false;
  let failed = false;
  const queue = [];
  const send = (name, data) => {
    if (failed) return;
    if (!ready) { if (queue.length < 30) queue.push([name, data]); return; }
    try { Promise.resolve(window.umami.track(name, data)).catch(() => {}); } catch (_) {}
  };
  const tracker = document.createElement('script');
  tracker.src = 'https://cloud.umami.is/script.js';
  tracker.async = true;
  tracker.dataset.websiteId = websiteId;
  tracker.dataset.domains = hosts.join(',');
  tracker.dataset.excludeHash = 'true';
  tracker.dataset.doNotTrack = 'true';
  tracker.dataset.beforeSend = 'idyeahAnalyticsBeforeSend';
  tracker.addEventListener('load', () => {
    ready = typeof window.umami?.track === 'function';
    if (ready) queue.splice(0).forEach(([name, data]) => send(name, data));
    else { failed = true; queue.length = 0; }
  });
  tracker.addEventListener('error', () => { failed = true; queue.length = 0; });
  document.head.append(tracker);

  const placement = element => element.closest('header') ? 'header' : element.closest('section')?.id || 'page';
  const strip = document.querySelector('.off-share')?.dataset.permalink?.match(/\/(\d{3})$/)?.[1];
  document.addEventListener('click', event => {
    const element = event.target.closest?.('a,button,summary');
    if (!element) return;
    if (element.matches('[data-copy]')) {
      send(element.dataset.copy === 'credit' ? 'Copy credit clicked' : 'Copy link clicked', { strip });
      return;
    }
    if (element.matches('summary')) {
      if (element.parentElement.open) return;
      if (element.closest('.off-share')) send('Share menu opened', { strip });
      if (element.closest('.off-transcript')) send('Transcript opened', { strip });
      return;
    }
    if (!element.matches('a[href]') || element.matches('.skip')) return;
    const url = new URL(element.href, location.origin);
    if (element.hasAttribute('download')) { send('Strip download clicked', { strip }); return; }
    if (element.closest('.off-art')) { send('Full size artwork clicked', { strip }); return; }
    if (url.hostname === 'calendly.com') { send('Call link clicked', { placement: placement(element) }); return; }
    if (url.protocol === 'mailto:') {
      send(element.closest('.audit-preview') ? 'Audit request clicked' : 'Email link clicked');
      return;
    }
    if (url.hostname === 'x.com' && url.pathname === '/intent/tweet') { send('Share on X clicked', { strip }); return; }
    if (url.hostname === 'www.linkedin.com' && url.pathname.startsWith('/sharing/')) { send('Share on LinkedIn clicked', { strip }); return; }
    if (url.origin === location.origin || hosts.includes(url.hostname)) {
      if (url.pathname === '/off-idyeah/archive') send('Archive opened');
      else if (/^\/off-idyeah(?:\/\d{3})?$/.test(url.pathname)) send('Strip opened', { strip: url.pathname.split('/')[2] || 'latest' });
      else if (url.pathname === '/a-to-z') send('A to Z opened');
      return;
    }
    if (url.protocol === 'https:' || url.protocol === 'http:') send('Outbound link clicked', { destination: url.hostname });
  });

  // Approximate attentive time: visible, focused, and active in the last 30 seconds.
  // Milestones also make single-page reading visible, without per-second network traffic.
  const milestones = [15, 30, 60, 120, 300];
  let activeMs = 0;
  let lastTick = performance.now();
  let lastActivity = lastTick;
  let nextMilestone = 0;
  let visible = document.visibilityState === 'visible';
  let focused = document.hasFocus();
  const tick = () => {
    const now = performance.now();
    if (visible && focused) activeMs += Math.max(0, Math.min(now, lastActivity + 30000) - lastTick);
    lastTick = now;
    while (nextMilestone < milestones.length && activeMs >= milestones[nextMilestone] * 1000) {
      send('Active time ' + milestones[nextMilestone] + 's');
      nextMilestone++;
    }
  };
  const activity = () => { tick(); lastActivity = performance.now(); };
  ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart'].forEach(type =>
    document.addEventListener(type, activity, { passive: true }));
  document.addEventListener('visibilitychange', () => {
    tick(); visible = document.visibilityState === 'visible';
    if (visible) lastActivity = performance.now();
  });
  window.addEventListener('blur', () => { tick(); focused = false; });
  window.addEventListener('focus', () => { tick(); focused = true; lastActivity = performance.now(); });
  window.addEventListener('pagehide', tick);
  window.addEventListener('pageshow', () => {
    lastTick = performance.now(); lastActivity = lastTick;
    visible = document.visibilityState === 'visible'; focused = document.hasFocus();
  });
  setInterval(tick, 1000);

  const depths = new Set();
  document.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight;
    if (height <= innerHeight || document.visibilityState !== 'visible') return;
    const percent = (scrollY + innerHeight) / height * 100;
    [50, 90].forEach(depth => {
      if (percent >= depth && !depths.has(depth)) { depths.add(depth); send('Scroll depth ' + depth + '%'); }
    });
  }, { passive: true });
})();
