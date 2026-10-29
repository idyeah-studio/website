// Update metadata in the source documents, then keep their public copies in sync.
// Run with --check to verify without writing. No browser-side code is needed.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const origin = 'https://www.idyeah.studio';
const organizationId = `${origin}/#organization`;
const personId = `${origin}/person#person`;
const websiteId = `${origin}/#website`;
const publicPages = JSON.parse(fs.readFileSync(path.join(__dirname, 'public-pages.json'), 'utf8'));
const pages = { '/': '/magazine/index.html', ...publicPages,
  '/terms': '/terms.html', '/privacy': '/privacy.html', '/a-to-z': '/a-to-z.html' };

const copy = {
  '/': {
    title: 'idyeah — Product Audit & Design Studio',
    description: 'Product audits and design, brand storytelling, and pitch decks by Vishal Mehta. Based in Cupertino, serving the Bay Area and clients remotely.',
  },
  '/inside': {
    title: 'Inside idyeah — Product Audit & Design Studio',
    description: 'Explore idyeah’s product audit and design practice, selected client work, independent products, and founder Vishal Mehta.',
  },
  '/practice': {
    title: 'Product Audits, UX, Brand & Pitch Deck Design · idyeah',
    description: 'Review your product and brand through eight lenses. Work with Vishal Mehta on apps, websites, design systems, brand identity, storytelling, and pitch decks.',
  },
  '/person': {
    title: 'Vishal Mehta — Product Designer & Founder of idyeah',
    description: 'Meet Vishal Mehta, founder of idyeah: a product designer and storyteller with twenty-five years of experience in product design, brands, and pitch decks.',
  },
  '/proof': {
    title: 'Product Audit & Design Case Studies · idyeah',
    description: 'Selected work for Mosaix, Rialty, Ionate, SimComm, Stealth, and FirecrackerPR: product audits, product design, brand communication, and pitch decks.',
  },
  '/proof/mosaix': {
    title: 'Mosaix — Product Audit & Onboarding Design · idyeah',
    description: 'An audit and employee onboarding experience for Mosaix, from a new hire’s first day to the six-month journey. Explore the design, showreel, and client feedback.',
  },
  '/proof/rialty': {
    title: 'Rialty — Real Estate Product & Brand Design · idyeah',
    description: 'Web and mobile product design, brand identity, and communication for Rialty’s real estate experience. Explore the work, showreel, and founder feedback.',
  },
  '/proof/ionate': {
    title: 'Ionate MIRA — Product Design & Storytelling · idyeah',
    description: 'Product design, naming, and storytelling for MIRA, Ionate’s legacy modernization agent. Explore the product film, design work, and CEO feedback.',
  },
  '/proof/simcomm': {
    title: 'SimComm — Audit & Corporate Deck Design · idyeah',
    description: 'A corporate deck shaped by an audit, making SimComm’s platform expertise clear. Explore the narrative, presentation design, and selected slides.',
  },
  '/proof/stealth': {
    title: 'Stealth B2C — Brand & Product Experience Audit · idyeah',
    description: 'A confidential B2C product audit across brand and experience. Explore the eight-lens review and why the recommendation was to realign, rather than rebuild.',
  },
  '/proof/firecracker': {
    title: 'FirecrackerPR — Sales Pitch Deck Design · idyeah',
    description: 'A sales proposal for FirecrackerPR that puts their story and evidence in focus. Explore selected slides, the showreel, and feedback from CEO Edward Yang.',
  },
  '/products/crit-audit': { title: 'Crit8 — Product & Website Audits · idyeah' },
  '/products/diya': { title: 'DIYA — Components & Patterns in Code · idyeah' },
  '/products/crit-mobile': { title: 'Crit Mobile — Design, Deck & Resume Critiques · idyeah' },
  '/products/crit-figma': { title: 'Crit Figma — Frame Critiques in Figma · idyeah' },
  '/products/dated-figma': { title: 'Dated Figma — Date Shifting Plugin · idyeah' },
  '/products/design-ai-alchemy': { title: 'Design AI Alchemy — AI Design Prompts · idyeah' },
  '/products/wabi': { title: 'Wabi — Daily Wellbeing Practice · idyeah' },
};

const cases = [
  { slug: 'mosaix', client: 'Mosaix', image: '/magazine/assets/mosaix/showreel-poster.webp' },
  { slug: 'rialty', client: 'Rialty', image: '/magazine/assets/rialty/showreel-poster.webp' },
  { slug: 'ionate', client: 'Ionate', image: '/assets/idyeah/work/mira-action-poster.jpg' },
  { slug: 'simcomm', client: 'SimComm', image: '/magazine/assets/simcomm-slide-2.webp' },
  { slug: 'stealth', client: 'Stealth · B2C' },
  { slug: 'firecracker', client: 'FirecrackerPR', image: '/magazine/assets/firecracker/showreel-poster.webp' },
];

const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const unescape = value => value.replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
function readMeta(html, key) {
  const tag = html.match(new RegExp(`<meta\\b(?=[^>]*\\b(?:name|property)=["']${key}["'])[^>]*>`, 'i'));
  return tag ? unescape(tag[0].match(/\bcontent=(["'])(.*?)\1/i)?.[2] || '') : '';
}
function setMeta(html, key, value, property = false) {
  const pattern = new RegExp(`<meta\\b(?=[^>]*\\b(?:name|property)=["']${key}["'])[^>]*>`, 'gi');
  const tag = `<meta ${property ? 'property' : 'name'}="${key}" content="${escape(value)}">`;
  const matches = html.match(pattern) || [];
  if (matches.length > 1) throw new Error(`Duplicate metadata: ${key}`);
  return matches.length ? html.replace(pattern, () => tag) : html.replace('</head>', `${tag}\n</head>`);
}

function graphFor(route, title, description) {
  const url = origin + route;
  const pageId = `${url}#webpage`;
  const organization = {
    '@type': 'Organization', '@id': organizationId, name: 'idyeah', url: `${origin}/`,
    description: 'Product Audit & Design Studio led by Vishal Mehta. Based in Cupertino, California, serving the San Francisco Bay Area and clients remotely.',
    logo: `${origin}/magazine/assets/wordmark-dark-flat.svg`,
    email: 'vishal@idyeah.studio', founder: { '@id': personId },
    address: { '@type': 'PostalAddress', addressLocality: 'Cupertino', addressRegion: 'California', addressCountry: 'US' },
    areaServed: { '@type': 'Place', name: 'San Francisco Bay Area' },
    sameAs: ['https://x.com/idyeahstudio'],
  };
  const person = {
    '@type': 'Person', '@id': personId, name: 'Vishal Mehta', url: `${origin}/person`,
    jobTitle: 'Product designer and storyteller', worksFor: { '@id': organizationId },
    image: `${origin}/magazine/assets/vishal-seated.webp`,
    sameAs: ['https://www.linkedin.com/in/vishalme/'],
  };
  const website = {
    '@type': 'WebSite', '@id': websiteId, name: 'idyeah', url: `${origin}/`,
    publisher: { '@id': organizationId }, inLanguage: 'en',
  };
  const page = {
    '@type': 'WebPage', '@id': pageId, url, name: title, description,
    isPartOf: { '@id': websiteId }, publisher: { '@id': organizationId }, inLanguage: 'en',
  };
  const graph = [organization, person, website, page];
  if (route === '/') page.about = { '@id': organizationId };
  if (route === '/person') {
    page['@type'] = 'ProfilePage';
    page.mainEntity = { '@id': personId };
  }
  if (route === '/practice') {
    const catalogId = `${url}#services`;
    const service = (name, serviceDescription) => ({
      '@type': 'Offer', itemOffered: {
        '@type': 'Service', '@id': `${url}#${name.toLowerCase()}`,
        name, description: serviceDescription, serviceType: name === 'Audit' ? 'Product and brand audit' : 'Product design and storytelling',
        provider: { '@id': organizationId }, url,
      },
    });
    graph.push({
      '@type': 'OfferCatalog', '@id': catalogId, name: 'Audit and Design',
      itemListElement: [
        service('Audit', 'Your product and brand reviewed through eight lenses: UX, Visual, Copy, Brand, Marketing, Industry, Buyer, and Investor.'),
        service('Design', 'Apps, websites, and design systems ready for development; pitch decks, brand identity, and social presence.'),
      ],
    });
    organization.hasOfferCatalog = { '@id': catalogId };
    page.mainEntity = { '@id': catalogId };
  }
  if (route === '/proof') {
    page['@type'] = 'CollectionPage';
    const listId = `${url}#cases`;
    page.mainEntity = { '@id': listId };
    graph.push({ '@type': 'ItemList', '@id': listId, name: 'Selected client work', numberOfItems: cases.length,
      itemListElement: cases.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.client, url: `${origin}/proof/${item.slug}` })),
    });
  }
  const project = cases.find(item => route === `/proof/${item.slug}`);
  if (project) {
    const workId = `${url}#case-study`;
    page.mainEntity = { '@id': workId };
    graph.push({
      '@type': 'CreativeWork', '@id': workId, name: title.replace(/ · idyeah$/, ''), url, description,
      genre: 'Design case study', author: { '@id': personId }, publisher: { '@id': organizationId },
      about: project.slug === 'stealth' ? { '@type': 'Thing', name: 'Confidential B2C product audit' } : { '@type': 'Organization', name: project.client },
      mainEntityOfPage: { '@id': pageId },
      ...(project.image ? { image: origin + project.image } : {}),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

function render(route, source) {
  let html = source;
  const values = copy[route] || {};
  const title = values.title || unescape(source.match(/<title>([\s\S]*?)<\/title>/i)[1]);
  const description = values.description || readMeta(source, 'description');
  if (!description) throw new Error(`Missing description: ${route}`);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${escape(title)}</title>`);
  // Every public page identifies its clean URL, rather than a legacy redirect.
  const canonical = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/gi;
  if ((html.match(canonical) || []).length !== 1) throw new Error(`Expected one canonical URL: ${route}`);
  html = html.replace(canonical, () => `<link rel="canonical" href="${origin + route}">`);
  const shareTitle = route === '/' ? readMeta(source, 'og:title') : values.title || readMeta(source, 'og:title') || title;
  const shareDescription = values.description || readMeta(source, 'og:description') || description;
  const image = readMeta(source, 'og:image') || `${origin}/magazine/assets/social-cover.jpg`;
  const imageAlt = image.endsWith('/social-cover.jpg') ? 'idyeah magazine cover, designed by Vishal Mehta' : readMeta(source, 'og:image:alt');
  html = setMeta(html, 'description', description);
  for (const [key, value] of Object.entries({ 'og:title': shareTitle, 'og:description': shareDescription, 'og:url': origin + route,
    'og:image': image, 'og:image:alt': imageAlt || title })) html = setMeta(html, key, value, true);
  if (!readMeta(html, 'og:type')) html = setMeta(html, 'og:type', 'website', true);
  for (const [key, value] of Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': shareTitle,
    'twitter:description': shareDescription, 'twitter:image': image, 'twitter:image:alt': imageAlt || title })) html = setMeta(html, key, value);
  // A single static graph is available on the initial response, without JS execution.
  const graph = JSON.stringify(graphFor(route, title, description), null, 2).replace(/</g, '\\u003c');
  const script = `<script id="idyeah-search-metadata" type="application/ld+json">\n${graph}\n</script>`;
  const pattern = /<script id="idyeah-search-metadata" type="application\/ld\+json">[\s\S]*?<\/script>/;
  html = pattern.test(html) ? html.replace(pattern, () => script) : html.replace('</head>', `${script}\n</head>`);
  return html;
}

function run(check = false) {
  const stale = [];
  for (const [route, source] of Object.entries(pages)) {
    const file = path.join(root, source);
    const original = fs.readFileSync(file, 'utf8');
    const updated = render(route, original);
    const outputs = new Set([file, path.join(root, route === '/' ? 'index.html' : `${route}.html`)]);
    for (const output of outputs) {
      if (fs.readFileSync(output, 'utf8') === updated) continue;
      stale.push(path.relative(root, output));
      if (!check) fs.writeFileSync(output, updated);
    }
  }
  if (check && stale.length) throw new Error(`Metadata or public copies are out of sync:\n${stale.join('\n')}`);
  return stale;
}

module.exports = { origin, pages, cases, render, graphFor, run };
if (require.main === module) {
  const check = process.argv.includes('--check');
  const files = run(check);
  console.log(check ? 'Search metadata and public copies are in sync.' : `Updated metadata in ${files.length} source/public files.`);
}
