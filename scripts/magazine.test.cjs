const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const products=[
 {name:'crit-audit',route:'/products/crit-audit',label:'Crit8',folio:22},
 {name:'diya',route:'/products/diya',label:'DIYA',folio:23},
 {name:'crit-ios',route:'/products/crit-mobile',label:'Crit Mobile',folio:24},
 {name:'crit-figma',route:'/products/crit-figma',label:'Crit Figma',folio:25},
 {name:'dated-figma',route:'/products/dated-figma',label:'Dated Figma',folio:26},
 {name:'alchemy',route:'/products/design-ai-alchemy',label:'Design AI Alchemy',folio:27},
];
const pages=['index','services','proof','mosaix-story','rialty-story','ionate-story','simcomm-story','stealth-story','firecracker-story','vishal',...products.map(product=>product.name)];
const routes=JSON.parse(fs.readFileSync('vercel.json','utf8')).routes;
const publicPages=JSON.parse(fs.readFileSync('scripts/public-pages.json','utf8'));
const routeFor=n=>n==='index'?'/':Object.keys(publicPages).find(k=>publicPages[k]===`/magazine/${n}.html`);
const read=n=>fs.readFileSync(`magazine/${n}.html`,'utf8');
const attribute=(attributes,name)=>attributes.match(new RegExp(`\\b${name}=["']([^"']*)["']`))?.[1];
const redirectFor=url=>routes.find(route=>route.status===308&&new RegExp(`^(?:${route.src})$`).test(url));
test('the magazine completes one ordered journey back to the cover',()=>{
 for(let i=2;i<pages.length;i++){
 const next=pages[(i+1)%pages.length],expected=routeFor(next);
 assert.ok(read(pages[i]).includes(`data-next-page="${expected}"`),pages[i]);
 assert.ok(!read(pages[i]).includes('data-next-page="pending"'));
 }
 assert.match(read('index'),/class="contents-turn" href="\/practice"/);
 assert.match(read('services'),/href="\/proof"/);
});
test('every published spread has metadata, landscape guidance, and existing local HTML references',()=>{
 for(const n of pages){const s=read(n);
 for(const token of ['name="description"','rel="canonical"','property="og:image"','magazine-ready.js','magazine-ready.css'])assert.ok(s.includes(token),`${n}: ${token}`);
 assert.ok(!s.includes('noindex'));
 for(const match of s.matchAll(/(?:src|href|poster)="([^"#]+)"/g)){
 const u=match[1];if(/^(https?:|mailto:|data:)/.test(u))continue;
 const clean=decodeURIComponent(u.split(/[?#]/)[0]);if(!clean)continue;
 const rewrite=routes.find(r=>r.src===clean&&r.dest&&!r.has);
 const file=rewrite?'.'+rewrite.dest:clean.startsWith('/')?'.'+clean:path.join('magazine',clean);
 if(routes.some(r=>r.src===clean&&r.status===308))continue;
 assert.ok((fs.existsSync(file)||fs.existsSync(file+'.html')),`${n}: missing ${file}`);
 }
 }
});
test('all proof pages link the call invitation and use B2C for the selected stealth quote',()=>{
 for(const n of pages.slice(2,9))assert.match(read(n),/class="walkthrough-call" href="https:\/\/calendly.com\/vishal-idyeah\/30min"/);
 assert.ok(read('services').includes('Founder · Stealth · B2C'));
 assert.ok(read('stealth-story').includes('Stealth · B2C</span>'));
});
test('turning spreads own their layout before JavaScript executes',()=>{
 for(const n of pages.slice(2))assert.match(read(n),/<body[^>]*>\s*<div class="magazine-leaf">/,n);
 const js=fs.readFileSync('magazine/assets/magazine-turn.js','utf8');
 assert.ok(!js.includes('getComputedStyle(body)'));
 assert.ok(!js.includes('Object.assign(sheet.style'));
 assert.ok(!js.includes('setTimeout(begin,1200)'));
});

test('rotation keeps a device viewport and clips to the actual page surface',()=>{
 const ready=fs.readFileSync('magazine/assets/magazine-ready.js','utf8');
 assert.ok(!ready.includes('width=1024'));
 assert.ok(!ready.includes('viewport.content='));
 for(const file of ['magazine/index.html','magazine/assets/services.js','magazine/assets/magazine-turn.js']){
  const s=fs.readFileSync(file,'utf8');
  assert.ok(s.includes('width=sheet.clientWidth,height=sheet.clientHeight'),file);
  assert.ok(s.includes('new ResizeObserver(resizeFold)'),file);
 }
});
test('only corner controls intercept navigation and history restoration does not reload',()=>{
 for(const name of ['magazine-turn','services']){
  const source=fs.readFileSync(`magazine/assets/${name}.js`,'utf8');
  assert.ok(!/querySelectorAll\('a(?:\[href\])?'\)/.test(source));
  assert.ok(source.includes("handle.addEventListener('click'"));
  assert.ok(!source.includes('location.reload()'));
 }
 const cover=read('index');
 assert.ok(cover.includes('const turnLinks=[nextCorner];'));
 assert.ok(!cover.includes("querySelector('.contents-home').addEventListener('click'"));
 assert.ok(!cover.includes('location.reload()'));
});

test('public links and metadata use clean routes with legacy redirects',()=>{
 for(const n of pages){
  const s=read(n);assert.match(s,/<base href="\/magazine\/">/);
  assert.ok(!/href="(?:\.\/[^"#]+\.html|\/magazine\/[^"#]+\.html)/.test(s),n);
  if(n!=='index')assert.ok(s.includes(`href="https://www.idyeah.studio${routeFor(n)}"`),n);
 }
 for(const r of routes.filter(r=>r.dest&&!r.has)){
  if(r.dest.startsWith('https://')){
   assert.equal(r.src,'/api/diya-launch');
   assert.equal(r.dest,'https://diya.keya.studio/api/launch');
   continue;
  }
  assert.ok(r.dest.startsWith('/'),r.dest);
  assert.ok(fs.existsSync('.'+r.dest),r.dest);
 }
 for(const [url,source] of Object.entries(publicPages))assert.equal(fs.readFileSync('.'+url+'.html','utf8'),fs.readFileSync('.'+source,'utf8'),url);
});

test('all six products have the same ordered clean navigation, one current link, and consecutive folios',()=>{
 for(const product of products){
  assert.equal(publicPages[product.route],`/magazine/${product.name}.html`,product.name);
  const html=read(product.name);
  const navs=[...html.matchAll(/<nav\b([^>]*)>([\s\S]*?)<\/nav>/g)].filter(match=>attribute(match[1],'aria-label')==='Products');
  assert.equal(navs.length,1,`${product.name}: one product navigation`);
  const links=[...navs[0][2].matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(match=>({
   href:attribute(match[1],'href'),label:match[2].replace(/<[^>]+>/g,'').trim(),current:attribute(match[1],'aria-current'),
  }));
  assert.deepEqual(links.map(link=>link.href),products.map(item=>item.route),`${product.name}: product order`);
  assert.deepEqual(links.map(link=>link.label),products.map(item=>item.label),`${product.name}: product names`);
  assert.deepEqual(links.filter(link=>link.current).map(link=>({href:link.href,current:link.current})),[{href:product.route,current:'page'}],`${product.name}: current page`);
  const folios=[...html.matchAll(/<span\b[^>]*class="[^"]*\bfolio\b[^"]*"[^>]*>\s*(\d+)\s*<\/span>/g)].map(match=>Number(match[1]));
  assert.deepEqual(folios,[product.folio],`${product.name}: folio`);
 }
});

test('published HTML has no local preview metadata, addresses, or prototype asset references',()=>{
 const sources=new Set(['/magazine/index.html',...Object.values(publicPages)]);
 for(const file of sources){
  const html=fs.readFileSync('.'+file,'utf8');
  assert.ok(!/noindex/i.test(html),`${file}: noindex`);
  assert.ok(!/local design preview/i.test(html),`${file}: preview title`);
  assert.ok(!/(?:localhost|127\.0\.0\.1)(?::\d+)?/i.test(html),`${file}: local address`);
  assert.ok(!/(?:src|href|poster)="[^"]*(?:product-concepts\/|product-preview\.(?:css|js)|-preview\.html)/i.test(html),`${file}: preview reference`);
 }
 for(const name of ['crit-audit','diya']){
  const html=read(name);
  assert.match(html,/assets\/product-pages\/product-pages\.css/);
  assert.match(html,/assets\/product-pages\/product-pages\.js/);
 }
 const diya=read('diya');
 assert.match(diya,/assets\/product-pages\/diya-countdown\.js/);
 assert.deepEqual([...diya.matchAll(/data-countdown-unit="([^"]+)"/g)].map(match=>match[1]),['days','hours','minutes','seconds']);
});

test('the product entry and legacy keya routes lead to Crit8 while Wabi stays published off the journey',()=>{
 for(const url of ['/products','/products/','/products/keya','/products/keya/','/products/keya.html','/magazine/products-study','/magazine/products-study.html']){
  const redirect=redirectFor(url);
  assert.ok(redirect,`${url}: permanent redirect`);
  assert.equal(redirect.headers.Location,'/products/crit-audit',url);
 }
 assert.ok(!Object.hasOwn(publicPages,'/products/keya'));
 assert.equal(publicPages['/products/wabi'],'/magazine/wabi.html');
 assert.ok(fs.existsSync('products/wabi.html'));
 assert.ok(!products.some(product=>product.name==='wabi'));
 for(const name of ['index','inside']){
  const html=read(name);
  assert.match(html,/<a href="\/products\/crit-audit"><span class="nav-name">Products<\/span>/);
  assert.ok(!html.includes('href="/products/keya"'),`${name}: old product entry`);
 }
});

test('DIYA launch uses one fixed uncached upstream before host dispatch',()=>{
 const proxies=routes.filter(r=>r.src==='/api/diya-launch');
 assert.equal(proxies.length,1);
 const proxy=proxies[0];
 assert.equal(proxy.dest,'https://diya.keya.studio/api/launch');
 assert.equal(proxy.headers['Cache-Control'],'no-store');
 assert.ok(!proxy.continue);
 const headers=routes.findIndex(r=>r.src==='/(.*)'&&r.headers?.['X-Content-Type-Options']==='nosniff'&&r.continue);
 const dispatch=routes.findIndex(r=>r.has&&r.dest);
 assert.ok(headers>=0&&routes.indexOf(proxy)>headers);
 assert.ok(dispatch>=0&&routes.indexOf(proxy)<dispatch);
});

test('Proof is a published landing page and every client links to its case study',()=>{
 assert.equal(routeFor('proof'),'/proof');
 assert.ok(!routes.some(r=>r.src==='/proof/?'&&r.status===308));
 const s=read('proof');
 assert.ok(!s.includes('palette-nav'));
 for(const client of ['mosaix','rialty','ionate','simcomm','stealth','firecracker']){
  assert.ok(s.includes(`href="/proof/${client}"`),client);
 }
 for(const name of ['mosaix-story','rialty-story','ionate-story','simcomm-story','stealth-story']){
  assert.ok(read(name).includes('class="case-pills-label" href="/proof"'),name);
  assert.ok(read(name).includes('href="/proof/firecracker"'),name);
 }
});
