const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { origin, pages, cases, render, run } = require('./search-metadata.cjs');
const read = source => fs.readFileSync('.' + source, 'utf8');
function schema(html) {
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, 'one static JSON-LD graph');
  return JSON.parse(scripts[0][1]);
}
function walk(value, visit) {
  if (!value || typeof value !== 'object') return;
  visit(value);
  for (const child of Object.values(value)) walk(child, visit);
}

test('all published pages have valid, connected metadata in their initial HTML', () => {
  for (const [route, source] of Object.entries(pages)) {
    const html = read(source);
    const data = schema(html);
    assert.equal(data['@context'], 'https://schema.org', route);
    const page = data['@graph'].find(node => node['@id'] === origin + route + '#webpage');
    assert.equal(page.url, origin + route, route);
    assert.ok(page.name && page.description, route);
    const definitions = new Set();
    const references = new Set();
    walk(data, node => {
      if (node['@id']) (node['@type'] ? definitions : references).add(node['@id']);
      if (node.image && typeof node.image === 'string' && node.image.startsWith(origin)) {
        assert.ok(fs.existsSync('.' + new URL(node.image).pathname), node.image);
      }
    });
    for (const id of references) assert.ok(definitions.has(id), `${route}: undefined ${id}`);
    for (const name of ['description', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) {
      assert.equal([...html.matchAll(new RegExp(`<meta name="${name}"`, 'g'))].length, 1, `${route}: ${name}`);
    }
    assert.equal([...html.matchAll(/<link rel="canonical"/g)].length, 1, route);
    assert.ok(html.includes(`href="${origin + route}"`), route);
  }
});

test('identity uses approved geography and verified profiles without private address details', () => {
  const graph = schema(read('/magazine/index.html'))['@graph'];
  const organization = graph.find(node => node['@type'] === 'Organization');
  const person = graph.find(node => node['@type'] === 'Person');
  assert.equal(organization.address.addressLocality, 'Cupertino');
  assert.equal(organization.address.addressRegion, 'California');
  assert.equal(organization.areaServed.name, 'San Francisco Bay Area');
  assert.ok(!('streetAddress' in organization.address));
  assert.ok(!('postalCode' in organization.address));
  assert.deepEqual(organization.sameAs, ['https://x.com/idyeahstudio']);
  assert.deepEqual(person.sameAs, ['https://www.linkedin.com/in/vishalme/']);
  assert.ok(fs.existsSync('.' + new URL(organization.logo).pathname));
  assert.ok(!fs.readFileSync('.' + new URL(organization.logo).pathname, 'utf8').includes('<symbol'));
});

test('Practice and Proof describe existing services and real cases without fabricated SEO claims', () => {
  const practice = schema(read('/magazine/services.html'))['@graph'];
  const catalog = practice.find(node => node['@type'] === 'OfferCatalog');
  assert.deepEqual(catalog.itemListElement.map(item => item.itemOffered.name), ['Audit', 'Design']);
  const proof = schema(read('/magazine/proof.html'))['@graph'].find(node => node['@type'] === 'ItemList');
  assert.equal(proof.numberOfItems, 6);
  assert.deepEqual(proof.itemListElement.map(item => item.url), cases.map(item => `${origin}/proof/${item.slug}`));
  for (const source of Object.values(pages)) {
    walk(schema(read(source)), node => {
      assert.ok(!['FAQPage', 'AggregateRating', 'Review', 'SearchAction'].includes(node['@type']), source);
      for (const property of ['price', 'priceRange', 'aggregateRating', 'reviewRating', 'datePublished', 'foundingDate']) {
        assert.ok(!(property in node), `${source}: ${property}`);
      }
    });
  }
  for (const project of cases) {
    const graph = schema(read(pages[`/proof/${project.slug}`]))['@graph'];
    const work = graph.find(node => node['@type'] === 'CreativeWork');
    assert.equal(work.genre, 'Design case study');
    assert.equal(work.url, `${origin}/proof/${project.slug}`);
  }
});

test('the descriptor changes everywhere it renders while the approved homepage share card remains', () => {
  for (const source of ['/magazine/index.html', '/magazine/inside.html']) {
    const html = read(source);
    assert.match(html, /PRODUCT AUDIT &amp; DESIGN STUDIO/);
    assert.match(html, /Product Audit &amp; Design Studio/);
    assert.ok(!/product (?:&amp;|and) brand design studio/i.test(html));
  }
  const home = read('/magazine/index.html');
  assert.match(home, /property="og:title" content="Your product deserves better design\. — idyeah\."/);
  assert.match(home, /property="og:image" content="https:\/\/www\.idyeah\.studio\/magazine\/assets\/social-ambition\.jpg"/);
});

test('metadata generation is idempotent and all public copies stay synchronized', () => {
  for (const [route, source] of Object.entries(pages)) {
    const original = read(source);
    assert.equal(render(route, original), original, route);
  }
  assert.deepEqual(run(true), []);
});
