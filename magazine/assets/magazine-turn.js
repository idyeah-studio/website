// Shared corner bend reuses the approved Practice-page cylindrical geometry.
(()=>{
 const body=document.body;
 if(!body.dataset.nextPage)return;
 // Layout belongs to CSS, never a snapshot of computed styles during loading.
 const sheet=body.querySelector(':scope > .magazine-leaf');
 if(!sheet)return;
 body.classList.add('has-magazine-turn');
 body.style.setProperty('--fold-under',body.dataset.foldUnder||'#171715');
 body.insertAdjacentHTML('beforeend',`<svg class="leaf-fold" aria-hidden="true"><defs><filter id="leaf-shadow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter></defs><path class="leaf-shadow" fill="#000" opacity=".32" filter="url(#leaf-shadow)"/><g class="leaf-surface"></g></svg>`);
 const pending=body.dataset.nextPage==='pending';
 const handle=document.createElement(pending?'button':'a');handle.className='leaf-handle';
 if(pending){handle.type='button';handle.setAttribute('aria-disabled','true');handle.setAttribute('aria-label','Page turn — sequence to be connected');handle.title='Page sequence to be connected';}
 else{handle.href=body.dataset.nextPage;handle.setAttribute('aria-label','Turn to '+body.dataset.nextLabel);handle.title='Next: '+body.dataset.nextLabel;}
 body.append(handle);
})();
(()=>{
 const sheet=document.querySelector('.magazine-leaf'),svg=document.querySelector('.leaf-fold'),surface=document.querySelector('.leaf-surface'),shadow=document.querySelector('.leaf-shadow'),handle=document.querySelector('.leaf-handle');
 if(!sheet||!surface||!handle)return;
 const color=hex=>hex.replace('#','').match(/../g).map(v=>parseInt(v,16));
 const paper=color(document.body.dataset.foldFront||'#f4f0e6'),reverse=color(document.body.dataset.foldBack||'#c93219');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,nx=.8,ny=.6,N=48;
 let width=sheet.clientWidth,height=sheet.clientHeight,depth=38,active=false,hover=false,animation=0;
 const bands=Array.from({length:N+1},()=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');surface.append(p);return p});
 function clip(poly,c,less=true){const out=[];for(let i=0;i<poly.length;i++){let a=poly[i],b=poly[(i+1)%poly.length],da=nx*a[0]+ny*a[1]-c,db=nx*b[0]+ny*b[1]-c,ia=less?da<=0:da>=0,ib=less?db<=0:db>=0;if(ia)out.push(a);if(ia!==ib){let t=da/(da-db);out.push([a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])]);}}return out;}
 function path(poly){return poly.length?'M'+poly.map(p=>p.join(',')).join('L')+'Z':'';}
 function draw(d){depth=d;const cut=nx*width+ny*height-d,R=Math.min(40,Math.max(9,d*.23)),rect=[[0,0],[width,0],[width,height],[0,height]],front=clip(rect,cut),roll=Math.PI*R;
 sheet.style.clipPath=front.length?'polygon('+front.map(p=>p.map(n=>n+'px').join(' ')).join(',')+')':'polygon(0 0,0 0,0 0)';
 function project([x,y]){const u=nx*x+ny*y-cut,t=Math.max(0,Math.min(Math.PI,u/R)),q=u<=roll?R*Math.sin(t):-(u-roll),z=R*(1-Math.cos(t));return[x+nx*(q-u)-z*.12,y+ny*(q-u)-z*.22];}
 let silhouette=[];const lifted=clip(rect,cut,false);for(let i=0;i<lifted.length;i++){const a=lifted[i],b=lifted[(i+1)%lifted.length];for(let j=0;j<28;j++){const t=j/28;silhouette.push(project([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]));}}
 shadow.setAttribute('d',path(silhouette.map(([x,y])=>[x+4,y+7])));
 for(let i=0;i<=N;i++){let lo=roll*i/N,hi=i===N?1e6:roll*(i+1)/N+.15,poly=clip(clip(rect,cut+lo,false),cut+hi),mapped=poly.map(project);bands[i].setAttribute('d',path(mapped));const t=Math.PI*(i+.5)/N;let rgb;if(i<N/2){const v=Math.round(13+35*Math.pow(Math.sin(t),5));rgb=paper.map(c=>Math.round(c*(1-.28*Math.pow(Math.sin(t),2))));}else{const light=i===N?.97:.72+.28*Math.sin((t-Math.PI/2));rgb=reverse.map(v=>Math.round(v*light));}bands[i].setAttribute('fill',`rgb(${rgb.join(',')})`);bands[i].setAttribute('stroke',`rgb(${rgb.join(',')})`);bands[i].setAttribute('stroke-width','.45');}
 }
 function animate(to,duration,done){cancelAnimationFrame(animation);let start=performance.now(),from=depth;function frame(now){let t=Math.min(1,(now-start)/duration),e=t*t*(3-2*t);draw(from+(to-from)*e);if(t<1)animation=requestAnimationFrame(frame);else if(done)done();}animation=requestAnimationFrame(frame);}

 function idle(now){if(!active){const target=hover?56:38+(reduced?0:2.6*Math.pow((1-Math.cos(now/1150))/2,3));if(Math.abs(target-depth)>.03)draw(depth+(target-depth)*.075);}requestAnimationFrame(idle);}
 handle.addEventListener('pointerenter',()=>hover=true);handle.addEventListener('pointerleave',()=>hover=false);handle.addEventListener('focus',()=>hover=true);handle.addEventListener('blur',()=>hover=false);
 const link=handle;
 handle.addEventListener('click',e=>{
 const url=new URL(link.href,location.href);if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||link.target==='_blank'||url.origin!==location.origin||!/^https?:$/.test(url.protocol)||url.pathname===location.pathname)return;
 if(document.body.hasAttribute('data-portrait-page')&&matchMedia('(max-width:760px) and (orientation:portrait)').matches)return;
 e.preventDefault();if(active)return;if(reduced){location.assign(url.href);return;}active=true;handle.style.pointerEvents='none';document.body.classList.add('magazine-turning');
 const frame=document.createElement('iframe');frame.className='destination-preview';frame.title='Next page';frame.tabIndex=-1;frame.setAttribute('aria-hidden','true');frame.inert=true;
 let began=false;const begin=()=>{if(began)return;began=true;animate((nx*width+ny*height)*2+150,reduced?1:1400,()=>location.assign(url.href));};
 frame.addEventListener('load',()=>{const fonts=frame.contentDocument?.fonts;Promise.resolve(fonts?.ready).then(begin);},{once:true});frame.src=url.href;document.body.prepend(frame);setTimeout(()=>{if(!began)location.assign(url.href);},5000);
 });
 function resizeFold(){width=sheet.clientWidth;height=sheet.clientHeight;svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.style.width=width+'px';svg.style.height=height+'px';if(!active)draw(38);}
 addEventListener('resize',resizeFold);new ResizeObserver(resizeFold).observe(sheet);
 addEventListener('pageshow',e=>{
  if(!e.persisted)return;
  cancelAnimationFrame(animation);active=false;hover=false;
  document.querySelectorAll('.destination-preview').forEach(frame=>frame.remove());
  document.body.classList.remove('magazine-turning');handle.style.pointerEvents='';
  resizeFold();
 });
 svg.setAttribute('viewBox',`0 0 ${width} ${height}`);draw(38);requestAnimationFrame(idle);
})();
