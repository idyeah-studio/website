(() => {
  const counter = document.querySelector('.diya-countdown');
  if (!counter) return;
  const fields = Object.fromEntries(['days','hours','minutes','seconds'].map(unit => [unit, counter.querySelector(`[data-countdown-unit="${unit}"]`)]));
  let base = null, synchronizedAt = 0, pending = false, lastTick = 0, lastAttempt = -Infinity, displayed = null;

  const render = seconds => {
    if (displayed === seconds) return;
    displayed = seconds;
    const values = { days: Math.floor(seconds / 86400), hours: Math.floor(seconds % 86400 / 3600), minutes: Math.floor(seconds % 3600 / 60), seconds: seconds % 60 };
    for (const [unit, value] of Object.entries(values)) fields[unit].textContent = String(value).padStart(2, '0');
    counter.setAttribute('aria-label', Object.entries(values).map(([unit,value]) => `${value} ${value === 1 ? unit.slice(0,-1) : unit}`).join(', ') + ' remaining');
  };

  const tick = () => {
    if (base === null || document.hidden) return;
    const now = performance.now();
    if (now - lastTick > 2000) sync();
    lastTick = now;
    const seconds = Math.max(0, Math.ceil(base - (now - synchronizedAt) / 1000));
    render(seconds);
    if (seconds === 0 && base > 0 && now - lastAttempt > 5000) sync();
  };

  async function sync() {
    if (pending || document.hidden) return;
    pending = true;
    lastAttempt = performance.now();
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);
    try {
      // Same public source as DIYA's own launch counter, through a fixed proxy.
      const response = await fetch('/api/diya-launch', { cache: 'no-store', credentials: 'omit', signal: controller.signal });
      if (!response.ok) throw new Error('Countdown unavailable');
      const data = await response.json();
      if (!Number.isSafeInteger(data.seconds) || data.seconds < 0) throw new Error('Invalid countdown');
      base = data.seconds;
      synchronizedAt = lastTick = performance.now();
      render(base);
    } catch {
      // Keep a previously synchronized estimate; never invent a launch date.
      if (base === null) counter.setAttribute('aria-label', 'DIYA launch countdown currently unavailable');
    } finally {
      window.clearTimeout(timeout);
      pending = false;
    }
  }

  window.setInterval(tick, 1000);
  window.setInterval(() => { if (!document.hidden) sync(); }, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) sync(); });
  window.addEventListener('pageshow', sync);
  sync();
})();
