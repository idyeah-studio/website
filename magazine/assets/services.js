(()=>{
 const sheet=document.querySelector('.services-sheet'),svg=document.querySelector('.leaf-fold'),surface=document.querySelector('.leaf-surface'),shadow=document.querySelector('.leaf-shadow'),handle=document.querySelector('.leaf-handle');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,nx=.8,ny=.6,N=48;
 let width=innerWidth,height=innerHeight,depth=38,active=false,hover=false,animation=0;
 const bands=Array.from({length:N+1},()=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');surface.append(p);return p});
 function clip(poly,c,less=true){const out=[];for(let i=0;i<poly.length;i++){let a=poly[i],b=poly[(i+1)%poly.length],da=nx*a[0]+ny*a[1]-c,db=nx*b[0]+ny*b[1]-c,ia=less?da<=0:da>=0,ib=less?db<=0:db>=0;if(ia)out.push(a);if(ia!==ib){let t=da/(da-db);out.push([a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])]);}}return out;}
 function path(poly){return poly.length?'M'+poly.map(p=>p.join(',')).join('L')+'Z':'';}
 function draw(d){depth=d;const cut=nx*width+ny*height-d,R=Math.min(40,Math.max(9,d*.23)),rect=[[0,0],[width,0],[width,height],[0,height]],front=clip(rect,cut),roll=Math.PI*R;
 sheet.style.clipPath=front.length?'polygon('+front.map(p=>p.map(n=>n+'px').join(' ')).join(',')+')':'polygon(0 0,0 0,0 0)';
 function project([x,y]){const u=nx*x+ny*y-cut,t=Math.max(0,Math.min(Math.PI,u/R)),q=u<=roll?R*Math.sin(t):-(u-roll),z=R*(1-Math.cos(t));return[x+nx*(q-u)-z*.12,y+ny*(q-u)-z*.22];}
 let silhouette=[];const lifted=clip(rect,cut,false);for(let i=0;i<lifted.length;i++){const a=lifted[i],b=lifted[(i+1)%lifted.length];for(let j=0;j<28;j++){const t=j/28;silhouette.push(project([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]));}}
 shadow.setAttribute('d',path(silhouette.map(([x,y])=>[x+4,y+7])));
 for(let i=0;i<=N;i++){let lo=roll*i/N,hi=i===N?1e6:roll*(i+1)/N+.15,poly=clip(clip(rect,cut+lo,false),cut+hi),mapped=poly.map(project);bands[i].setAttribute('d',path(mapped));const t=Math.PI*(i+.5)/N;let rgb;if(i<N/2){const v=Math.round(13+35*Math.pow(Math.sin(t),5));rgb=[233,219,184].map(c=>Math.round(c*(1-.28*Math.pow(Math.sin(t),2))));}else{const light=i===N?.97:.72+.28*Math.sin((t-Math.PI/2));rgb=[201,50,25].map(v=>Math.round(v*light));}bands[i].setAttribute('fill',`rgb(${rgb.join(',')})`);bands[i].setAttribute('stroke',`rgb(${rgb.join(',')})`);bands[i].setAttribute('stroke-width','.45');}
 }
 function animate(to,duration,done){cancelAnimationFrame(animation);let start=performance.now(),from=depth;function frame(now){let t=Math.min(1,(now-start)/duration),e=t*t*(3-2*t);draw(from+(to-from)*e);if(t<1)animation=requestAnimationFrame(frame);else if(done)done();}animation=requestAnimationFrame(frame);}

 function idle(now){if(!active){const target=hover?56:38+(reduced?0:2.6*Math.pow((1-Math.cos(now/1150))/2,3));if(Math.abs(target-depth)>.03)draw(depth+(target-depth)*.075);}requestAnimationFrame(idle);}
 handle.addEventListener('pointerenter',()=>hover=true);handle.addEventListener('pointerleave',()=>hover=false);handle.addEventListener('focus',()=>hover=true);handle.addEventListener('blur',()=>hover=false);
 document.querySelectorAll('a').forEach(link=>link.addEventListener('click',e=>{
 const url=new URL(link.href,location.href);if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||link.target==='_blank'||url.origin!==location.origin||url.pathname===location.pathname||!/^https?:$/.test(url.protocol))return;
 e.preventDefault();if(active)return;if(reduced){location.assign(url.href);return;}active=true;handle.style.pointerEvents='none';
 const frame=document.createElement('iframe');frame.className='destination-preview';frame.title='Next page';frame.tabIndex=-1;frame.setAttribute('aria-hidden','true');frame.inert=true;
 let began=false;const begin=()=>{if(began)return;began=true;animate((nx*width+ny*height)*2+150,reduced?1:1400,()=>location.assign(url.href));};
 frame.addEventListener('load',begin,{once:true});frame.src=url.href;document.body.prepend(frame);setTimeout(begin,1200);
 }));
 addEventListener('resize',()=>{width=innerWidth;height=innerHeight;svg.setAttribute('viewBox',`0 0 ${width} ${height}`);if(!active)draw(38);});
 addEventListener('pageshow',e=>{if(e.persisted)location.reload();});
 svg.setAttribute('viewBox',`0 0 ${width} ${height}`);draw(38);requestAnimationFrame(idle);
})();

// Rasterize at device resolution, then curve the printed ink into the binding.
(()=>{
 const host=document.querySelector('.spread-ampersand'),canvas=host.querySelector('canvas');
 function print(){
  const size=parseFloat(getComputedStyle(host).fontSize),dpr=Math.min(devicePixelRatio||1,3),w=size*1.3,h=size*1.45;
  canvas.style.width=w+'px';canvas.style.height=h+'px';canvas.width=Math.ceil(w*dpr);canvas.height=Math.ceil(h*dpr);
  const source=document.createElement('canvas');source.width=canvas.width;source.height=canvas.height;
  const ink=source.getContext('2d');ink.scale(dpr,dpr);ink.font=`italic ${size}px Domaine`;ink.fillStyle='#c93219';
  const m=ink.measureText('&'),left=m.actualBoundingBoxLeft,right=m.actualBoundingBoxRight;
  ink.fillText('&',(w-right+left)/2,(h+m.actualBoundingBoxAscent-m.actualBoundingBoxDescent)/2-5);
  const ctx=canvas.getContext('2d');
  const gutter=Math.min(20,size*.12),drop=Math.min(6,size*.035);
  const sw=source.width,sh=source.height,pixels=ink.getImageData(0,0,sw,sh).data;
  const output=ctx.createImageData(sw,sh);
  function curve(x){return x*(1-.22*Math.exp(-x*x/(2*gutter*gutter)));}
  function alpha(x,y){return x<0||x>=sw||y<0||y>=sh?0:pixels[(y*sw+x)*4+3];}
  // Inverse sampling fills each destination pixel once; no overlapping strips.
  for(let x=0;x<sw;x++){
   const target=(x+.5)/dpr-w/2;
   let low=-w/2,high=w/2;
   for(let n=0;n<20;n++){const mid=(low+high)/2;if(curve(mid)<target)low=mid;else high=mid;}
   const sx=(low+high)/2,px=(sx+w/2)*dpr-.5,ix=Math.floor(px),fx=px-ix;
   const shift=drop*Math.exp(-sx*sx/(2*gutter*gutter))*dpr;
   for(let y=0;y<sh;y++){
    const py=y-shift,iy=Math.floor(py),fy=py-iy,index=(y*sw+x)*4;
    output.data[index]=201;output.data[index+1]=50;output.data[index+2]=25;
    output.data[index+3]=(alpha(ix,iy)*(1-fx)+alpha(ix+1,iy)*fx)*(1-fy)+(alpha(ix,iy+1)*(1-fx)+alpha(ix+1,iy+1)*fx)*fy;
   }
  }
  ctx.putImageData(output,0,0);
 }
 document.fonts.ready.then(print);addEventListener('resize',print);
})();
