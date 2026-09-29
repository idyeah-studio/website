const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const pages=['index','services','mosaix-story','rialty-story','ionate-story','simcomm-story','stealth-story','vishal','products-study','alchemy','crit-ios','crit-figma','wabi'];
const routes=JSON.parse(fs.readFileSync('vercel.json','utf8')).routes;
const routeFor=n=>n==='index'?'/':routes.find(r=>r.dest===`/magazine/${n}.html`).src;
const read=n=>fs.readFileSync(`magazine/${n}.html`,'utf8');
test('the magazine completes one ordered journey back to the cover',()=>{
 for(let i=2;i<pages.length;i++){
 const next=pages[(i+1)%pages.length],expected=routeFor(next);
 assert.ok(read(pages[i]).includes(`data-next-page="${expected}"`),pages[i]);
 assert.ok(!read(pages[i]).includes('data-next-page="pending"'));
 }
 assert.match(read('index'),/class="contents-turn" href="\/practice"/);
 assert.match(read('services'),/href="\/proof\/mosaix"/);
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
 for(const n of pages.slice(2,7))assert.match(read(n),/class="walkthrough-call" href="https:\/\/calendly.com\/vishal-idyeah\/30min"/);
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
 for(const r of routes.filter(r=>r.dest&&!r.has))assert.ok(fs.existsSync('.'+r.dest),r.dest);
 assert.ok(routes.some(r=>r.src==='/inside'&&r.dest==='/magazine/inside.html'));
});
