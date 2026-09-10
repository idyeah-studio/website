const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const source = readFileSync(new URL('../assets/idyeah/analytics.js', `file://${__filename}`), 'utf8');
const id = '12345678-1234-1234-1234-123456789abc';
function setup(options = {}) {
  let now = 0;
  const events = {}, timers = [], sent = [], scripts = [];
  const listen = (name, callback) => (events[name] ||= []).push(callback);
  const location = { hostname: options.hostname || 'www.idyeah.studio', origin: 'https://www.idyeah.studio' };
  const document = {
    visibilityState: 'visible', hasFocus: () => true,
    querySelector: selector => selector.includes('data-idyeah-analytics') ? { dataset: { websiteId: options.id ?? id } } : null,
    createElement: () => ({ dataset: {}, addEventListener(name, callback) { this[name] = callback; } }),
    head: { append: script => scripts.push(script) },
    addEventListener: listen, documentElement: { scrollHeight: 2000 },
  };
  const window = { addEventListener: listen, umami: { track: (name, data) => sent.push({ name, data }) } };
  const context = { window, document, location, navigator: options.navigator || {},
    localStorage: { getItem: () => options.optOut ? '1' : null },
    performance: { now: () => now }, URL, URLSearchParams, Promise,
    setInterval: callback => timers.push(callback), innerHeight: 800, scrollY: 0 };
  vm.runInNewContext(source, context);
  return { context, document, window, sent, scripts,
    ready: () => scripts[0].load(),
    fire: (name, event) => (events[name] || []).forEach(fn => fn(event)),
    advance: ms => { now += ms; timers.forEach(fn => fn()); },
  };
}
function link(href, classes = []) {
  const element = {
    href, matches: selector => selector === 'a[href]', hasAttribute: () => false,
    closest: selector => classes.includes(selector) ? { id: 'process' } : null,
  };
  return { target: { closest: () => element } };
}
test('no tracking on previews, absent configuration, or browser opt-out', () => {
  for (const options of [{ hostname: 'localhost' }, { hostname: 'mosaix.idyeah.studio' }, { id: '' },
    { navigator: { doNotTrack: '1' } }, { navigator: { globalPrivacyControl: true } }, { optOut: true }]) {
    assert.equal(setup(options).scripts.length, 0);
  }
});
test('queued clicks retain their meaning and do not include mailto contents', () => {
  const s = setup();
  s.fire('click', link('mailto:vishal@idyeah.studio?body=private-message', ['.audit-preview']));
  assert.equal(s.sent.length, 0);
  s.ready();
  assert.equal(s.sent[0].name, 'Audit request clicked');
  assert.ok(!JSON.stringify(s.sent).includes('private-message'));
  s.fire('click', link('https://calendly.com/vishal-idyeah/30min', ['header']));
  assert.equal(s.sent[1].name, 'Call link clicked');
  assert.equal(s.sent[1].data.placement, 'header');
});
test('strips, archive, shares, and outbound domains are categorized separately', () => {
  const s = setup(); s.ready();
  for (const href of ['https://www.idyeah.studio/off-idyeah/002','https://www.idyeah.studio/off-idyeah/archive',
    'https://x.com/intent/tweet?text=do-not-collect','https://www.linkedin.com/sharing/share-offsite/?url=do-not-collect',
    'https://vishalme.medium.com/article?sk=private-key']) s.fire('click', link(href));
  assert.deepEqual(s.sent.map(x => x.name), ['Strip opened','Archive opened','Share on X clicked','Share on LinkedIn clicked','Outbound link clicked']);
  assert.equal(s.sent[0].data.strip, '002');
  assert.equal(s.sent[4].data.destination, 'vishalme.medium.com');
  assert.ok(!JSON.stringify(s.sent).includes('private-key'));
});
test('tracker payload only keeps campaign query fields and strips referrer details', () => {
  const s = setup();
  const result = s.window.idyeahAnalyticsBeforeSend('event', {
    url: '/off-idyeah/002?email=private&fbclid=123&utm_source=linkedin&utm_campaign=002#private',
    referrer: 'https://example.com/private-path?token=secret',
  });
  assert.equal(result.url, '/off-idyeah/002?utm_source=linkedin&utm_campaign=002');
  assert.equal(result.referrer, 'https://example.com');
});
test('active time pauses after idle and while hidden or unfocused; milestones fire once', () => {
  const s = setup(); s.ready();
  s.advance(15000); s.advance(15000); s.advance(60000);
  assert.deepEqual(s.sent.map(x => x.name), ['Active time 15s','Active time 30s']);
  s.document.visibilityState = 'hidden'; s.fire('visibilitychange'); s.advance(120000);
  s.document.visibilityState = 'visible'; s.fire('visibilitychange'); s.advance(15000);
  s.fire('blur'); s.advance(120000); s.fire('focus'); s.advance(15000);
  assert.deepEqual(s.sent.map(x => x.name), ['Active time 15s','Active time 30s','Active time 60s']);
});
test('scroll milestones fire once and do not count hidden pages', () => {
  const s = setup(); s.ready();
  s.context.scrollY = 200; s.fire('scroll'); s.fire('scroll');
  s.document.visibilityState = 'hidden'; s.context.scrollY = 1100; s.fire('scroll');
  assert.deepEqual(s.sent.map(x => x.name), ['Scroll depth 50%']);
  s.document.visibilityState = 'visible'; s.fire('scroll');
  assert.deepEqual(s.sent.map(x => x.name), ['Scroll depth 50%','Scroll depth 90%']);
});
test('blocked tracker does not throw or disturb clicks', () => {
  const s = setup(); s.scripts[0].error();
  assert.doesNotThrow(() => s.fire('click', link('https://calendly.com/vishal-idyeah/30min')));
  assert.equal(s.sent.length, 0);
});
