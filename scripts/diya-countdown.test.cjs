const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../magazine/assets/product-pages/diya-countdown.js'), 'utf8');
const units = ['days', 'hours', 'minutes', 'seconds'];
const flush = async () => {
  // Fetch and response.json each cross an async boundary in the VM.
  for (let i = 0; i < 6; i++) await Promise.resolve();
};

function countdown(replies = [], { present = true } = {}) {
  let now = 0, nextTimer = 1, dateReads = 0;
  const queued = [...replies], requests = [], intervals = new Map(), timeouts = new Map();
  const documentEvents = new Map(), windowEvents = new Map();
  const fields = Object.fromEntries(units.map(unit => [unit, { textContent: '—' }]));
  const attributes = new Map();
  const counter = {
    querySelector(selector) {
      const match = selector.match(/^\[data-countdown-unit="(\w+)"\]$/);
      assert.ok(match, `Unexpected counter selector: ${selector}`);
      return fields[match[1]];
    },
    setAttribute(name, value) { attributes.set(name, value); },
  };
  const document = {
    hidden: false,
    querySelector(selector) {
      assert.equal(selector, '.diya-countdown');
      return present ? counter : null;
    },
    addEventListener(name, callback) { documentEvents.set(name, callback); },
  };
  const window = {
    setInterval(callback, delay) {
      const id = nextTimer++;
      intervals.set(id, { callback, delay });
      return id;
    },
    setTimeout(callback, delay) {
      const id = nextTimer++;
      timeouts.set(id, { callback, delay });
      return id;
    },
    clearTimeout(id) { timeouts.delete(id); },
    addEventListener(name, callback) { windowEvents.set(name, callback); },
  };
  class UntrustedClientDate {
    constructor() { dateReads++; throw new Error('Client wall clock must not set the launch deadline'); }
    static now() { dateReads++; throw new Error('Client wall clock must not set the launch deadline'); }
    static parse() { dateReads++; throw new Error('Client wall clock must not set the launch deadline'); }
    static UTC() { dateReads++; throw new Error('Client wall clock must not set the launch deadline'); }
  }
  vm.runInNewContext(source, {
    document, window, performance: { now: () => now }, Date: UntrustedClientDate, AbortController,
    fetch(url, options) {
      requests.push({ url, options });
      const reply = queued.shift();
      if (!reply) return Promise.reject(new Error('No response queued'));
      if (reply.error) return Promise.reject(reply.error);
      if (reply.waitForAbort) return new Promise((resolve, reject) => {
        options.signal.addEventListener('abort', () => reject(new Error('Request aborted')), { once: true });
      });
      return Promise.resolve({ ok: reply.ok !== false, json: async () => reply.data });
    },
  }, { filename: 'diya-countdown.js' });
  return {
    document, requests, intervals, timeouts,
    enqueue(reply) { queued.push(reply); },
    values: () => units.map(unit => fields[unit].textContent),
    label: () => attributes.get('aria-label'),
    dateReads: () => dateReads,
    async tick(elapsed = 1000) {
      now += elapsed;
      const timer = [...intervals.values()].find(entry => entry.delay === 1000);
      assert.ok(timer, 'A one-second rendering timer should be registered');
      timer.callback();
      await flush();
    },
    async poll() {
      const timer = [...intervals.values()].find(entry => entry.delay === 60000);
      assert.ok(timer, 'A periodic synchronization timer should be registered');
      timer.callback();
      await flush();
    },
    async emit(name) {
      const callback = documentEvents.get(name) || windowEvents.get(name);
      assert.ok(callback, `${name} should be registered`);
      callback();
      await flush();
    },
    async expireRequest() {
      const entry = [...timeouts.entries()].find(([, timer]) => timer.delay === 5000);
      assert.ok(entry, 'The request should have a five-second timeout');
      const [id, timer] = entry;
      timeouts.delete(id);
      now += timer.delay;
      timer.callback();
      await flush();
    },
  };
}

test('the authoritative response renders every unit and an accessible label', async () => {
  const clock = countdown([{ data: { seconds: 90061 } }]);
  await flush();
  assert.deepEqual(clock.values(), ['01', '01', '01', '01']);
  assert.equal(clock.label(), '1 day, 1 hour, 1 minute, 1 second remaining');
  assert.equal(clock.requests.length, 1);
  const { url, options } = clock.requests[0];
  assert.equal(url, '/api/diya-launch');
  assert.equal(options.cache, 'no-store');
  assert.equal(options.credentials, 'omit');
  assert.ok(options.signal instanceof AbortSignal);
  assert.equal(clock.timeouts.size, 0, 'A completed request clears its timeout');
});

test('elapsed ticks use monotonic time and never read the client wall clock', async () => {
  const clock = countdown([{ data: { seconds: 62 } }]);
  await flush();
  await clock.tick(900);
  assert.deepEqual(clock.values(), ['00', '00', '01', '02']);
  await clock.tick(100);
  assert.deepEqual(clock.values(), ['00', '00', '01', '01']);
  await clock.tick(1000);
  assert.deepEqual(clock.values(), ['00', '00', '01', '00']);
  await clock.tick(1000);
  assert.deepEqual(clock.values(), ['00', '00', '00', '59']);
  assert.equal(clock.requests.length, 1, 'Ordinary ticks should use the synchronized baseline');
  assert.equal(clock.dateReads(), 0);
});

test('becoming visible and returning through page history request fresh server values', async () => {
  const clock = countdown([{ data: { seconds: 120 } }]);
  await flush();
  clock.document.hidden = true;
  await clock.tick(10000);
  await clock.emit('visibilitychange');
  await clock.poll();
  assert.equal(clock.requests.length, 1, 'A hidden page should not refresh or tick');
  assert.deepEqual(clock.values(), ['00', '00', '02', '00']);

  clock.enqueue({ data: { seconds: 91 } });
  clock.document.hidden = false;
  await clock.emit('visibilitychange');
  assert.equal(clock.requests.length, 2);
  assert.deepEqual(clock.values(), ['00', '00', '01', '31']);
  await clock.tick();
  assert.deepEqual(clock.values(), ['00', '00', '01', '30']);

  clock.enqueue({ data: { seconds: 70 } });
  await clock.emit('pageshow');
  assert.equal(clock.requests.length, 3);
  assert.deepEqual(clock.values(), ['00', '00', '01', '10']);
});

test('periodic refresh and a delayed timer recover from a stale baseline', async () => {
  const clock = countdown([{ data: { seconds: 100 } }, { data: { seconds: 80 } }, { data: { seconds: 50 } }]);
  await flush();
  await clock.poll();
  assert.equal(clock.requests.length, 2);
  assert.deepEqual(clock.values(), ['00', '00', '01', '20']);
  await clock.tick(5000);
  assert.equal(clock.requests.length, 3, 'A suspended timer should resynchronize when it resumes');
  assert.deepEqual(clock.values(), ['00', '00', '00', '50']);
});

test('invalid or failed initial responses leave placeholders instead of inventing a deadline', async t => {
  const replies = [
    ['missing countdown', { data: { launchAt: '2030-01-01T00:00:00Z' } }],
    ['numeric string', { data: { seconds: '60' } }],
    ['negative value', { data: { seconds: -1 } }],
    ['fractional value', { data: { seconds: 1.5 } }],
    ['unsafe integer', { data: { seconds: Number.MAX_SAFE_INTEGER + 1 } }],
    ['non-finite value', { data: { seconds: Infinity } }],
    ['HTTP failure', { ok: false, data: { seconds: 60 } }],
    ['network failure', { error: new Error('Offline') }],
  ];
  for (const [name, reply] of replies) await t.test(name, async () => {
    const clock = countdown([reply]);
    await flush();
    await clock.tick();
    assert.deepEqual(clock.values(), ['—', '—', '—', '—']);
    assert.equal(clock.label(), 'DIYA launch countdown currently unavailable');
    assert.equal(clock.dateReads(), 0);
  });
});

test('a failed request can recover on the next page resynchronization', async () => {
  const clock = countdown([{ error: new Error('Offline') }]);
  await flush();
  clock.enqueue({ data: { seconds: 45 } });
  await clock.emit('pageshow');
  assert.deepEqual(clock.values(), ['00', '00', '00', '45']);
  assert.equal(clock.label(), '0 days, 0 hours, 0 minutes, 45 seconds remaining');
});

test('bad refreshes preserve a previous good baseline and its continuing elapsed time', async () => {
  const clock = countdown([{ data: { seconds: 65 } }]);
  await flush();
  for (const reply of [
    { data: { seconds: 300.5 } },
    { ok: false, data: { seconds: 900 } },
    { error: new Error('Offline') },
  ]) {
    await clock.tick();
    const before = clock.values();
    const label = clock.label();
    clock.enqueue(reply);
    await clock.emit('pageshow');
    assert.deepEqual(clock.values(), before);
    assert.equal(clock.label(), label);
  }
  await clock.tick();
  assert.deepEqual(clock.values(), ['00', '00', '01', '01']);
  assert.equal(clock.label(), '0 days, 0 hours, 1 minute, 1 second remaining');
});

test('a hanging request times out without a fabricated value and permits retry', async () => {
  const clock = countdown([{ waitForAbort: true }]);
  await flush();
  await clock.emit('pageshow');
  assert.equal(clock.requests.length, 1, 'Concurrent lifecycle events should not duplicate an in-flight request');
  await clock.expireRequest();
  assert.equal(clock.requests[0].options.signal.aborted, true);
  assert.deepEqual(clock.values(), ['—', '—', '—', '—']);
  assert.equal(clock.label(), 'DIYA launch countdown currently unavailable');
  clock.enqueue({ data: { seconds: 5 } });
  await clock.emit('pageshow');
  assert.equal(clock.requests.length, 2);
  assert.deepEqual(clock.values(), ['00', '00', '00', '05']);
});

test('elapsed time clamps at zero and zero from the server is a valid baseline', async () => {
  const clock = countdown([{ data: { seconds: 2 } }]);
  await flush();
  await clock.tick();
  assert.deepEqual(clock.values(), ['00', '00', '00', '01']);
  for (let i = 0; i < 3; i++) await clock.tick();
  assert.deepEqual(clock.values(), ['00', '00', '00', '00']);
  assert.equal(clock.label(), '0 days, 0 hours, 0 minutes, 0 seconds remaining');
  assert.equal(clock.requests.length, 1);

  const launched = countdown([{ data: { seconds: 0 } }]);
  await flush();
  await launched.tick();
  assert.deepEqual(launched.values(), ['00', '00', '00', '00']);
  assert.equal(launched.label(), '0 days, 0 hours, 0 minutes, 0 seconds remaining');
});

test('a page without a countdown does not start requests or timers', () => {
  const clock = countdown([], { present: false });
  assert.equal(clock.requests.length, 0);
  assert.equal(clock.intervals.size, 0);
  assert.equal(clock.timeouts.size, 0);
});
