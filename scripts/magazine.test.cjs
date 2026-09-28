const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const pages=['index','services','mosaix-story','rialty-story','ionate-story','simcomm-story','stealth-story','vishal','products-study','alchemy','crit-ios','crit-figma','wabi'];
const read=n=>fs.readFileSync(`magazine/${n}.html`,'utf8');
test('the magazine completes one ordered journey back to the cover',()=>{
 for(let i=2;i<pages.length;i++){
 const next=pages[(i+1)%pages.length],expected=next==='index'?'./':`./${next}.html`;
 assert.ok(read(pages[i]).includes(`data-next-page="${expected}"`),pages[i]);
 assert.ok(!read(pages[i]).includes('data-next-page="pending"'));
 }
 assert.match(read('index'),/class="contents-turn" href="\.\/services.html"/);
 assert.match(read('services'),/href="\.\/mosaix-story.html"/);
});
test('every published spread has metadata, landscape guidance, and existing local HTML references',()=>{
 for(const n of pages){const s=read(n);
 for(const token of ['name="description"','rel="canonical"','property="og:image"','magazine-ready.js','magazine-ready.css'])assert.ok(s.includes(token),`${n}: ${token}`);
 assert.ok(!s.includes('noindex'));
 for(const match of s.matchAll(/(?:src|href|poster)="([^"#]+)"/g)){
 const u=match[1];if(/^(https?:|mailto:|data:)/.test(u))continue;
 const clean=decodeURIComponent(u.split(/[?#]/)[0]);if(!clean)continue;
 const file=clean.startsWith('/')?'.'+clean:path.join('magazine',clean);
 assert.ok(fs.existsSync(file),`${n}: missing ${file}`);
 }
 }
});
test('all proof pages link the call invitation and use B2C for the selected stealth quote',()=>{
 for(const n of pages.slice(2,7))assert.match(read(n),/class="walkthrough-call" href="https:\/\/calendly.com\/vishal-idyeah\/30min"/);
 assert.ok(read('services').includes('Founder · Stealth · B2C'));
 assert.ok(read('stealth-story').includes('Stealth · B2C</span>'));
});
